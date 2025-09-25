"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text: "Roy Tours made our holiday stress-free and magical. Every detail was taken care of, and we discovered places we'd never have found on our own.",
    name: "Emma",
    country: "United Kingdom",
  },
  {
    text: "Our guide was knowledgeable and friendly. Sri Lanka felt like home thanks to Roy Tours.",
    name: "Rajiv",
    country: "India",
  },
  {
    text: "Such an unforgettable journey! Beautiful beaches, amazing food, and the best tour company we've worked with.",
    name: "Sofia",
    country: "Spain",
  },
  {
    text: "From the tea plantations to the cultural sites, everything was well planned and smooth.",
    name: "Lucas",
    country: "Germany",
  },
  {
    text:"Roy is a laid back guy who accepts your decision and doesn't just run with you from one point to the other. By the way, there was also information about land and people. We individually planned and had a great day. Next time again with Roy",
    name:"Ursula Lischke",
    country: "Germany",
  },
  {
    text:"we used the mini bus driver located outside of the guesthouse Roy Kumare Tours and can recommend him for any requests you have, he drove us to Mirissa which is a long journey, his driving was calm and we felt safe.",
    name:"Wendy",
    country: "UK",
  }
];

export default function Testimonials() {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  const speed = 50; // pixels per second
  const itemWidth = 344 * 4; // same as before (width of loop content)

  const allTestimonials = Array.from({ length: 6 }, (_, setIndex) =>
    testimonials.map((testimonial, index) => ({
      ...testimonial,
      key: `${setIndex}-${index}`,
    }))
  ).flat();

  // Custom animation frame loop
  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      let moveBy = (delta / 1000) * speed; // pixels per frame
      let newX = x.get() - moveBy;

      // reset when fully scrolled
      if (newX <= -itemWidth) {
        newX = 0;
      }
      x.set(newX);
    }
  });

  return (
    <section className="p-4 md:px-[50px] flex flex-col items-center text-center">
      <div className="px-4 py-2 border border-[#1e1e1e] w-fit rounded-full text-sm mb-2">
        Testimonials
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold mb-2">
        Memories Shared by Travelers Before You
      </h1>
      <p className="text-base md:text-lg mb-6">
        Don't just take our word for it. <br /> Here's what fellow travelers
        have to say about their journeys through Sri Lanka:
      </p>
      <div
        className="w-screen overflow-hidden py-5 cursor-grab active:cursor-grabbing"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div className="flex gap-6" style={{ x }}>
          {allTestimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              className="w-80 min-w-[20rem] h-80 rounded-md shadow-xl bg-white flex flex-col text-left p-4 shrink-0"
            >
              <div className="text-6xl">"</div>
              <p className="text-sm md:text-base flex-1">{testimonial.text}</p>
              <p className="text-sm mt-6 font-semibold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.country}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
