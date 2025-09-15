"use client";

import { useEffect, useState } from "react";

export default function GalleryTemplate({short_code}:{short_code:number}) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/admin/components/widgets/templates/gallery/callback?widget_id=${short_code}`)
      .then(res => res.json())
      .then(data => setImages(data.images || []));
  }, [short_code]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4">
      {images.map((url, i) => (
        <div key={i}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={url}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
