"use client"

import { useEffect, useRef, useState } from 'react';
import TiltedCard from "../components/tiltedcard"

// Scroll fade component wrapper
const ScrollFadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="py-15">
      <ScrollFadeIn>
        <div className="flex items-center justify-center flex-col rounded-xl text-black w-full py-25 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            An Investment in Memories, Not Just a Tour, 
          </h1>
          <p className="text-base sm:text-lg">
            Your time in Sri Lanka is precious. 
            This rate reflects personalized planning, local expertise, and unforgettable moments.
          </p>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn delay={200}>
        <div className="mx-auto max-w-md -mt-13 mb-15 rounded-3xl border border-green-500/30 bg-white p-4 text-center shadow-lg backdrop-blur-sm">
          <h1 className="mb-2 text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-700 via-green-500 to-white bg-clip-text text-transparent">
            $120 / hour
          </h1>
          <p className="mx-auto max-w-2xl text-base text-emerald-900">
            Flexible itinerary · Local expertise · Personalized experience
          </p>
        </div>
      </ScrollFadeIn>

      {/* Section 1 - Image Left, Text Right */}
      <ScrollFadeIn>
        <section className="p-4 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          <div className="md:w-1/2 md:-translate-x-10">
            <TiltedCard
              imageSrc="prices/on the way.jpg"  
              altText="Image of a scenic view"
              captionText="Scenic view of the landscape"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.1}
              rotateAmplitude={5}
              showMobileWarning={true}
              showTooltip={false}
              overlayContent={
                <div className="absolute" style={{ top: '230px', left: '30px', minWidth: '400px' }}>
                  <h3 className="text-7xl font-semibold text-white">
                    On the <br/>Way
                  </h3>
                </div>
              }
              displayOverlayContent={true}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold">The Adventure Begins Here</h2>
            <p className="mt-4 text-gray-700">
              An enriching Sri Lankan experience is on the way. 
              Thoughtfully designed tours ensure comfort, discovery, and memories at every step.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 italic font-semibold">
              <li>• River safaries on the Madu River</li>
              <li>• Dolphin watching in the Indian Ocean</li>
              <li>• Exploring mangroves and wetlands</li>
              <li>• Relaxing on beautiful beaches</li>
              <li>• Water sports like surfing or paddleboarding</li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Section 2 - Text Left, Image Right */}
      <ScrollFadeIn>
        <section className="p-4 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Nuwara Eliya - Little England of Sri Lanka</h2>
            <p className="mt-4 text-gray-700">
              Cool mountain air, rolling tea plantations, and charming colonial streets. 
              Nuwara Eliya offers peaceful escapes, scenic views, and a refreshing break in the heart of the hills.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 italic font-semibold">
              <li>• Lake Gregory</li>
              <li>• Tea Plantations</li>
              <li>• Mackwoods Tea Museum</li>
              <li>• High Tea at the Grand Hotel</li>
              <li>• Strawberry Farms</li>
              <li>• Victoria Park</li>
              <li>• Nuwara Eliya Golf Course</li>
            </ul>
          </div>
          <div className="md:w-1/2 md:-translate-x-5">
            <TiltedCard
              imageSrc="prices/nuwara-eliya.jpg"  
              altText="Image of a scenic view"
              captionText="Scenic view of the landscape"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.1}
              rotateAmplitude={5}
              showMobileWarning={true}
              showTooltip={false}
              overlayContent={
                <div className="absolute" style={{ top: '60px', left: '280px', minWidth: '400px' }}>
                  <h3 className="text-6xl font-bold text-white">
                    Nuwara<br/>Eliya
                  </h3>
                </div>
              }
              displayOverlayContent={true}
            />
          </div>
        </section>
      </ScrollFadeIn>

      {/* Section 3 - Image Left, Text Right */}
      <ScrollFadeIn>
        <section className="p-4 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          <div className="md:w-1/2 md:-translate-x-10">
            <TiltedCard
              imageSrc="prices/ella.jpg"  
              altText="Image of a scenic view"
              captionText="Scenic view of the landscape"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.1}
              rotateAmplitude={5}
              showMobileWarning={true}
              showTooltip={false}
              overlayContent={
                <div className="absolute" style={{ top: '270px', left: '50px', minWidth: '400px' }}>
                  <h3 className="text-white text-7xl font-bold">Ella</h3>
                </div>
              }
              displayOverlayContent={true}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Ella - Where Nature Meets Adventure</h2>
            <p className="mt-4 text-gray-700">
              Surrounded by lush greenery and dramatic landscapes, Ella is perfect for hikers, explorers, and nature lovers. 
              From iconic viewpoints to hidden waterfalls, every moment feels magical.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 italic font-semibold">
              <li>• Hike Ella Rock</li>
              <li>• Visit Rawana Ella Falls</li>
              <li>• Explore Ella Gap</li>
              <li>• Scenic Train ride</li>
              <li>• Local Cuisine</li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Section 4 - Text Left, Image Right */}
      <ScrollFadeIn>
        <section className="p-4 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Kandy - The Cultural Heart</h2>
            <p className="mt-4 text-gray-700">
              A city rich in history and tradition. 
              Home to the sacred Temple of the Tooth Relic, Kandy blends culture, spirituality, and natural beauty around its serene lake.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 italic font-semibold">
              <li>• Temple of Tooth</li>
              <li>• View Point</li>
              <li>• White Buddha</li>
              <li>• Pinnawala</li>
              <li>• Gadaladeniya Temple</li>
              <li>• Ambulueawa Tower</li>
              <li>• Culture Dance</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <TiltedCard
              imageSrc="prices/kandy.jpg"  
              altText="Image of a scenic view"
              captionText="Scenic view of the landscape"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.1}
              rotateAmplitude={5}
              showMobileWarning={true}
              showTooltip={false}
              overlayContent={
                <div className="absolute" style={{ top: '50px', left: '30px', minWidth: '400px' }}>
                  <h3 className="text-7xl text-white font-bold">Kandy</h3>
                </div>
              }
              displayOverlayContent={true}
            />
          </div>
        </section>
      </ScrollFadeIn>

      {/* Section 5 - Image Left, Text Right */}
      <ScrollFadeIn>
        <section className="p-4 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          <div className="md:w-1/2 md:-translate-x-10">
            <TiltedCard
              imageSrc="prices/galle.jpg"  
              altText="Image of a scenic view"
              captionText="Scenic view of the landscape"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.1}
              rotateAmplitude={5}
              showMobileWarning={true}
              showTooltip={false}
              overlayContent={
                <div className="absolute" style={{ top: '280px', left: '50px', minWidth: '400px' }}>
                  <h3 className="text-7xl font-bold text-white">Galle</h3>
                </div>
              }
              displayOverlayContent={true}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold">Galle - Coastal Charm & History</h2>
            <p className="mt-4 text-gray-700">
              Golden beaches, ocean breezes, and the historic Galle Fort. 
              Walk along cobbled streets, enjoy sunset views, and experience the unique blend of colonial heritage and coastal life.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 italic font-semibold">
              <li>• Galle Fort (UNESCO World Heritage)</li>
              <li>• Galle Dutch Reformed Church</li>
              <li>• Galle Promenade</li>
              <li>• Beaches like Unawatuna and Mirissa</li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
}