"use client";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-gray-300 transition-colors hover:bg-white/10 rounded-full backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-gray-300 transition-colors hover:bg-white/10 rounded-full backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain animate-in fade-in zoom-in-95 duration-300"
          loading="lazy"
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg backdrop-blur-sm max-w-[90vw] overflow-x-auto">
          {images.map((url, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-white shadow-lg' 
                  : 'border-transparent hover:border-gray-400'
              }`}
            >
              <img
                src={url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GalleryTemplate({
  short_code,
}: {
  short_code: number;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(
      `/admin/components/widgets/templates/gallery/callback?short_code=${short_code}`
    )
      .then((res) => res.json())
      .then((data) => {
        const allImages: string[] = [];
        if (data.images && Array.isArray(data.images)) {
          data.images.forEach((item: any) => {
            if (typeof item.image_list === "string") {
              try {
                const parsedImages = JSON.parse(item.image_list);
                if (Array.isArray(parsedImages)) {
                  allImages.push(...parsedImages);
                }
              } catch (error) {
                console.error("Error parsing image_list:", error);
              }
            } else if (Array.isArray(item.image_list)) {
              allImages.push(...item.image_list);
            }
          });
        }
        setImages(allImages);
      })
      .catch((error) => {
        console.error("Gallery fetch error:", error);
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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 p-4 md:px-[50px]"
        columnClassName="flex flex-col gap-4"
      >
        {images.map((url, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden transition-all duration-700 cursor-pointer hover:scale-[1.02] hover:shadow-lg group"
            style={{ opacity: loadedImages[i] ? 1 : 0 }}
            onClick={() => openLightbox(i)}
          >
            <div className="relative">
              <img
                src={url}
                alt={`Gallery image ${i + 1}`}
                className="w-full object-cover transition-transform duration-300"
                loading="lazy"
                onLoad={() => handleImageLoad(i)}
                onError={() => handleImageError(i, url)}
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}