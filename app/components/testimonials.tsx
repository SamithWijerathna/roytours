"use client";
import { motion } from "framer-motion";

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
];

export default function Testimonials() {
  // Create enough copies for smooth infinite scroll (6 sets should cover all screen sizes)
  const allTestimonials = Array.from({ length: 6 }, (_, setIndex) =>
    testimonials.map((testimonial, index) => ({
      ...testimonial,
      key: `${setIndex}-${index}`,
    }))
  ).flat();

  return (
    <section className="p-4 flex flex-col items-center text-center">
      <div className="px-4 py-2 border border-[#1e1e1e] w-fit rounded-full text-sm mb-2">
        Testimonials
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold mb-2">
        Memories Shared by Travelers Before You
      </h1>
      <p className="text-base md:text-xl mb-6">
        Don't just take our word for it. <br /> Here's what fellow travelers
        have to say about their journeys through Sri Lanka:
      </p>

      {/* Stable Infinite Conveyor */}
      <div className="w-screen overflow-hidden py-5">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -(344 * 4)], // Move exactly 4 cards (one complete set)
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {allTestimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              className="w-80 min-w-[20rem] h-80 rounded-md shadow-md bg-white flex flex-col text-left p-4 shrink-0"
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
