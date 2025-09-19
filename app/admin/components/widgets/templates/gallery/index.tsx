"use client";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export default function GalleryTemplate({ short_code }: { short_code: number }) {
  const [images, setImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetch(`/admin/components/widgets/templates/gallery/callback?short_code=${short_code}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Gallery API Response:', data); // Debug log
        const allImages: string[] = [];
        
        if (data.images && Array.isArray(data.images)) {
          data.images.forEach((item: any) => {
            // Handle case where image_list is a JSON string
            if (typeof item.image_list === 'string') {
              try {
                const parsedImages = JSON.parse(item.image_list);
                if (Array.isArray(parsedImages)) {
                  allImages.push(...parsedImages);
                }
              } catch (error) {
                console.error('Error parsing image_list:', error);
              }
            } 
            // Handle case where image_list is already an array (fallback)
            else if (Array.isArray(item.image_list)) {
              allImages.push(...item.image_list);
            }
          });
        }
        
        console.log('Processed gallery images:', allImages); // Debug log
        setImages(allImages);
      })
      .catch((error) => {
        console.error('Gallery fetch error:', error);
      });
  }, [short_code]);

  const maxCols = Math.min(4, images.length || 1);
  const breakpointColumnsObj = {
    default: maxCols,
    1024: Math.min(3, maxCols),
    768: Math.min(2, maxCols),
    480: Math.min(2, maxCols),
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number, url: string) => {
    console.error(`Gallery image failed to load at index ${index}:`, url);
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
            onError={() => handleImageError(i, url)}
          />
        </div>
      ))}
    </Masonry>
  );
}