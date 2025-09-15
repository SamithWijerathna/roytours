"use client";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export default function GalleryTemplate({
  short_code,
}: {
  short_code: number;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    fetch(
      `/admin/components/widgets/templates/gallery/callback?short_code=${short_code}`
    )
      .then((res) => res.json())
      .then((data) => {
        const allImages: string[] = [];
        if (data.images && Array.isArray(data.images)) {
          data.images.forEach((item: any) => {
            if (item.image_list && Array.isArray(item.image_list)) {
              allImages.push(...item.image_list);
            }
          });
        }
        setImages(allImages);
      })
      .catch(console.error);
  }, [short_code]);

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    480: 2,
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 p-4 md:px-[50px]"
      columnClassName="flex flex-col gap-4"
    >
      {images.map((url, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden transition-opacity duration-700"
          style={{ opacity: loadedImages[i] ? 1 : 0 }}
        >
          <img
            src={url}
            alt={`Gallery image ${i + 1}`}
            className="w-full object-cover"
            loading="lazy"
            onLoad={() => handleImageLoad(i)}
          />
        </div>
      ))}
    </Masonry>
  );
}
