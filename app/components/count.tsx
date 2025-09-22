"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12 mb-8 flex flex-row gap-8">
      <div>
        <p className="text-7xl font-bold">
          {inView ? <CountUp end={10} duration={3} /> : "0"}+
        </p>
        <p className="text-base md:text-lg">Years of experience</p>
      </div>
      <div>
        <p className="text-7xl font-semibold">
          {inView ? <CountUp end={100} duration={3} /> : "0"}+
        </p>
        <p className="text-base md:text-lg">Happy Explorers</p>
      </div>
    </div>
  );
}
