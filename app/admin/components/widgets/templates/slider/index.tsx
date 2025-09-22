"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface GalleryTemplateProps {
  short_code: number;
}

export default function GalleryCarousel({ short_code }: GalleryTemplateProps) {
  const pathname = usePathname();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `/admin/components/widgets/templates/slider/callback?short_code=${short_code}`
    )
      .then((res) => res.json())
      .then((data) => {
        const allImages: string[] = [];
        if (Array.isArray(data.images)) {
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
        console.error("Fetch error:", error);
      })
      .finally(() => setLoading(false));
  }, [short_code]);

  useEffect(() => {
    if (!images.length) return;
    function updateWidth() {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [images]);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    setTouchStartX(null);
  };

  return (
    <div className="flex flex-col items-center mt-6 w-full">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * imageWidth}px)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-fit h-[300px] flex justify-center px-2"
              ref={index === 0 ? imageRef : null}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className="rounded-2xl object-cover"
                onError={(e) => {
                  console.error("Image failed to load:", img);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full py-2 h-full mt-6">
        {pathname === "/" && (
          <a
            href="/experience" 
            className="relative bg-transparent border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap flex items-center gap-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
              See More <span className="sr-only">Sri Lanka travel experiences</span>
            </div>
            <div className="w-full z-10 h-full p-4 items-center justify-center rounded-full group-hover:scale-105 bg-[#1e1e1e]">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <path
                  d="M1.708 8.5h14.583M16.292 8.5L9 1.208M16.292 8.5L9 15.792"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="absolute rounded-full inset-0 bg-[#1e1e1e] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </a>
        )}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="hover:scale-105 transition-all "
          >
            <svg
              width="50"
              height="60"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 25C50 38.8071 38.8071 50 25 50V50C11.1929 50 0 38.8071 0 25V25C0 11.1929 11.1929 0 25 0V0C38.8071 0 50 11.1929 50 25V25Z"
                fill="#1E1E1E"
              />
              <path
                d="M36.6667 25L13.3333 25M13.3333 25L25 36.6666M13.3333 25L25 13.3333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="hover:scale-105 transition-all"
          >
            <svg
              width="50"
              height="60"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25C0 11.1929 11.1929 0 25 0V0C38.8071 0 50 11.1929 50 25V25C50 38.8071 38.8071 50 25 50V50C11.1929 50 0 38.8071 0 25V25Z"
                fill="#1E1E1E"
              />
              <path
                d="M13.3333 25H36.6667M36.6667 25L25 13.3334M36.6667 25L25 36.6667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
