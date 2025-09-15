import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { getDBConnection } from "@/app/api/db";
import { promises as fs } from "fs";

const db = await getDBConnection();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const widgetId = searchParams.get("widget_id");

  try {
    const currentFolder = path.join(
      process.cwd(),
      "app/admin/components/widgets/templates/gallery"
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

    const [rows]: any = await db.execute(
      `SELECT image_list FROM widget_${widget_uid} WHERE w_id = ?`,
      [widgetId]
    );

    return NextResponse.json({ images: rows || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const widgetId = searchParams.get("widget_id");

  if (!widgetId)
    return NextResponse.json({ error: "widget_id required" }, { status: 400 });

  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), "public", "uploads", file.name);

  await writeFile(filePath, buffer);
  const url = `/uploads/${file.name}`;

  await db.execute(
    "INSERT INTO widget_images (widget_id, image_url) VALUES (?, ?)",
    [widgetId, url]
  );

  return NextResponse.json({ success: true, url });
}
