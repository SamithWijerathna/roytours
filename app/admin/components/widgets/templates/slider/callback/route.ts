import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { getDBConnection } from "@/app/api/db";
import { promises as fs } from "fs";

const db = await getDBConnection();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const short_code = searchParams.get("short_code");

  try {
    const currentFolder = path.join(
      process.cwd(),
      "app/admin/components/widgets/templates/slider"
    );
    const infoPath = path.join(currentFolder, "info.thr");
    const content = await fs.readFile(infoPath, "utf-8");
    const infoData: Record<string, string> = {};
    const lines = content.split(/[\r\n]+/).filter(Boolean);

    for (const line of lines) {
      const match = line.match(/^(\w+)=(["']?)(.+?)\2$/);
      if (match) {
        const [, key, , value] = match;
        infoData[key.toLowerCase()] = value;
      }
    }

    let widget_uid = infoData.id?.replace(/-/g, "_");

    const [rows]: any = await db.execute(
      `SELECT image_list FROM widget_${widget_uid} WHERE short_code = ?`,
      [short_code]
    );

    return NextResponse.json({ images: rows || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    const index = formData.get("index") as string | null;
    const short_code = formData.get("short_code") as string;
    const remove = formData.get("remove") as string | null;

    // Load widget_uid
    const currentFolder = path.join(
      process.cwd(),
      "app/admin/components/widgets/templates/slider"
    );
    const infoPath = path.join(currentFolder, "info.thr");
    const content = await fs.readFile(infoPath, "utf-8");

    const infoData: Record<string, string> = {};
    const lines = content.split(/[\r\n]+/).filter(Boolean);
    for (const line of lines) {
      const match = line.match(/^(\w+)=(["']?)(.+?)\2$/);
      if (match) {
        const [, key, , value] = match;
        infoData[key.toLowerCase()] = value;
      }
    }
    const widget_uid = infoData.id?.replace(/-/g, "_");

    // Get existing row
    const [rows]: any = await db.execute(
      `SELECT image_list FROM widget_${widget_uid} WHERE short_code = ? LIMIT 1`,
      [short_code]
    );

    if (!rows.length) {
      return NextResponse.json(
        { error: "Row not found for given short_code" },
        { status: 404 }
      );
    }

    // ✅ Safely parse existing image_list
  let imageList: string[] = [];
try {
  const dbValue = rows[0].image_list;

  if (Array.isArray(dbValue)) {
    // Already an array (MySQL JSON column or parsed)
    imageList = dbValue;
  } else if (typeof dbValue === "string" && dbValue !== "") {
    const parsed = JSON.parse(dbValue);
    if (Array.isArray(parsed)) imageList = parsed;
  }
} catch (err) {
  console.error("Failed to parse image_list:", err);
  imageList = [];
}


    // --- REMOVE MODE ---
    if (remove === "true" && index !== null) {
      const i = parseInt(index);
      if (i >= 0 && i < imageList.length) {
        imageList.splice(i, 1);
      }

      await db.execute(
        `UPDATE widget_${widget_uid} SET image_list = ? WHERE short_code = ?`,
        [JSON.stringify(imageList), short_code]
      );

      return NextResponse.json({ success: true, imageList });
    }

    // --- UPLOAD MODE ---
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        widget_uid,
        short_code
      );
      await fs.mkdir(uploadDir, { recursive: true });

      const fileName = `${Date.now()}_${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      await fs.writeFile(filePath, buffer);

      const publicPath = `/uploads/${widget_uid}/${short_code}/${fileName}`;

      // ✅ Append instead of replacing
      imageList.push(publicPath);

      await db.execute(
        `UPDATE widget_${widget_uid} SET image_list = ? WHERE short_code = ?`,
        [JSON.stringify(imageList), short_code]
      );

      return NextResponse.json({ success: true, imageList });
    }

    return NextResponse.json({ error: "No action performed" }, { status: 400 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

