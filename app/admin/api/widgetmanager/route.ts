import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { getDBConnection } from "@/app/api/db";

// ---------- GET: list templates + their widgets ----------
export async function GET() {
  const templatesDir = path.join(process.cwd(), "app/admin/components/widgets/templates");

  const entries = await fs.readdir(templatesDir, { withFileTypes: true });
  const folders = entries.filter(e => e.isDirectory()).map(e => e.name);

  const templateData = await Promise.all(
    folders.map(async (folder) => {
      const folderPath = path.join(templatesDir, folder);
      const infoPath = path.join(folderPath, "info.thr");

      let infoData: Record<string, string> = {};
      try {
        const content = await fs.readFile(infoPath, "utf-8");
        const lines = content.split(/\r?\n/).filter(Boolean);
        for (const line of lines) {
          const match = line.match(/^(\w+)=["']?(.+?)["']?$/);
          if (match) {
            const [, key, value] = match;
            infoData[key.toLowerCase()] = value;
          }
        }
      } catch {
        infoData = {};
      }

      // Ensure permanent unique ID exists
      if (!infoData.id) {
        const newId = crypto.randomUUID();
        infoData.id = newId;

        const infoLines = Object.entries(infoData).map(([k, v]) => `${k}="${v}"`);
        await fs.writeFile(infoPath, infoLines.join("\n"), "utf-8");
      }

      // Load banner image as Base64
      let banner: string | null = null;
      try {
        const files = await fs.readdir(folderPath);
        const bannerFile = files.find(f => /^banner\.(png|jpg|jpeg|webp|gif)$/i.test(f));
        if (bannerFile) {
          const fileBuffer = await fs.readFile(path.join(folderPath, bannerFile));
          const ext = bannerFile.split(".").pop();
          banner = `data:image/${ext};base64,${fileBuffer.toString("base64")}`;
        }
      } catch {
        banner = null;
      }

      return {
        id: infoData.id,
        folder,
        author: infoData.author || null,
        ver: infoData.ver || null,
        name: infoData.name || null,
        desc: infoData.desc || null,
        banner
      };
    })
  );

  // Fetch existing widgets from DB
  const db = await getDBConnection();
  const [widgets]: any = await db.execute(
    "SELECT widget_id, widget_uid, widget_name, short_code, active FROM widgets"
  );

  // Group widgets by template id
  const widgetsByUid = widgets.reduce((acc: any, w: any) => {
    if (!acc[w.widget_uid]) acc[w.widget_uid] = [];
    acc[w.widget_uid].push(w);
    return acc;
  }, {});

  const fullData = templateData.map(t => ({
    ...t,
    widgets: widgetsByUid[t.id] || []
  }));

  return NextResponse.json(fullData);
}

// ---------- POST: create new widget ----------


export async function POST(req: Request) {
  try {
    const { template_id, widget_name } = await req.json();
    if (!template_id || !widget_name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const db = await getDBConnection();

    // --- Find the template folder by reading info.thr ---
    const templatesDir = path.join(process.cwd(), "app/admin/components/widgets/templates");
    const folders = await fs.readdir(templatesDir, { withFileTypes: true });

    let templateFolderPath: string | null = null;
    let infoData: Record<string, string> = {};

    for (const f of folders) {
      if (!f.isDirectory()) continue;

      const folderPath = path.join(templatesDir, f.name);
      const infoPath = path.join(folderPath, "info.thr");

      try {
        const content = await fs.readFile(infoPath, "utf-8");
        const lines = content.split(/\r?\n/).filter(Boolean);
        const tempData: Record<string, string> = {};
        for (const line of lines) {
          const match = line.match(/^(\w+)=["']?(.+?)["']?$/);
          if (match) {
            const [, key, value] = match;
            tempData[key.toLowerCase()] = value;
          }
        }

        if (tempData.id === template_id) {
          templateFolderPath = folderPath;
          infoData = tempData;
          break;
        }
      } catch {
        continue;
      }
    }

    if (!templateFolderPath) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 });
    }

    // --- Generate unique shortcode for main widgets table ---
    const genCode = () => String((crypto as any).randomInt(0, 10000)).padStart(4, "0");
    const MAX_ATTEMPTS = 20;
    let shortCode: string | null = null;
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      const candidate = genCode();
      const [rows]: any = await db.execute(
        "SELECT COUNT(*) as cnt FROM widgets WHERE short_code = ?",
        [candidate]
      );
      const count = rows?.[0]?.cnt ?? 0;
      if (!count) {
        shortCode = candidate;
        break;
      }
    }
    if (!shortCode) shortCode = String(Date.now() % 10000).padStart(4, "0");

    const [result]: any = await db.execute(
      `INSERT INTO widgets (widget_uid, widget_name, active, short_code, created_at)
       VALUES (?, ?, 'active', ?, NOW())`,
      [template_id, widget_name, shortCode]
    );

    const widget_id = result.insertId;

    if (infoData.database) {
  const safeUid = String(template_id).replace(/-/g, "_");
  // Ensure table creation is safe
  const tableSQL = infoData.database
    .replace("{uid}", safeUid)
    .replace(/^CREATE TABLE/i, "CREATE TABLE IF NOT EXISTS");

  try {
    // 1️⃣ Create the widget-specific table only if it doesn't exist
    await db.execute(tableSQL);

    // 2️⃣ Insert widget_id and short_code into the widget-specific table
    const widgetTable = safeUid; // same table name
    const insertSQL = `INSERT INTO widget_${safeUid} (w_id, short_code, created_at) VALUES (?, ?, NOW())`;

    await db.execute(insertSQL, [widget_id, shortCode]);
  } catch (err: any) {
    if (err.code === "ER_TABLE_EXISTS_ERROR") {
      // Table already exists → just insert the record
      const widgetTable = safeUid;
      const insertSQL = `INSERT INTO widget_${safeUid} (w_id, short_code, created_at) VALUES (?, ?, NOW())`;
      await db.execute(insertSQL, [widget_id, shortCode]);
    } else {
      console.error("Failed to create widget-specific table or insert record:", err);
    }
  }
}



    return NextResponse.json({
      success: true,
      widget_id,
      short_code: shortCode,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

