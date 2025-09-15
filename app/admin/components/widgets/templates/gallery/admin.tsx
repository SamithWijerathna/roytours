"use client";

import { useEffect, useState } from "react";

export default function GalleryAdmin({ id }: { id: number }) {
  const [images, setImages] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const loadImages = async () => {
    const res = await fetch(
      `/admin/components/widgets/templates/gallery/callback?widget_id=${id}`
    );
    const data = await res.json();
    setImages(data.images || []);
  };

  const upload = async () => {
    if (!file) return;
    const fd = new FormData();
    fd.append("image", file);
    await fetch(
      `/admin/components/widgets/templates/gallery/callback?widget_id=${id}`,
      {
        method: "POST",
        body: fd,
      }
    );
    setFile(null);
    loadImages();
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Gallery Admin (ID: {id})</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={upload}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, i) => (
          <img key={i} src={url} className="rounded" />
        ))}
      </div>
    </div>
  );
}
