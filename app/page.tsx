import Image from "next/image";
import Link from "next/link";
import Testimonials from "./components/testimonials";
import DeasinationSlider from "./components/desitination-slider";
import Template from "@/app/admin/components/widgets/widget-render"

export default function Home() {
  return (
    <div className="text-[#1e1e1e] min-h-screen pt-20 flex flex-col gap-10">
      <section>
        <div className="relative rounded-2xl h-[85dvh] mx-4 mb-4 flex items-center justify-center lg:justify-start text-center overflow-hidden p-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="/video/the video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 -z-10" />

          <div className="max-w-xl text-white flex flex-col items-center lg:items-start lg:text-left lg:p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experience the <br />
              Magic of Sri Lanka
            </h1>
            <div className="lg:absolute flex flex-col items-center lg:flex-row lg:pr-8 lg:justify-between lg:w-full bottom-2 ">
              <button className="relative bg-transparent justify-center text-[#ffffff] border-2 border-[#ffffff] rounded-full p-1 w-auto text-nowrap flex items-center gap-2 font-semibold md:text-xl group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
                <div className="pl-4 py-2 relative z-10 group-hover:text-black transition-colors duration-300">
                  Start Your Adventure{" "}
                </div>

                <div className="w-full z-10 h-full p-4 items-center justify-center rounded-full group-hover:scale-105 bg-[#ffffff]">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.79169 11.7084L12.2084 1.29169M12.2084 1.29169H1.79169M12.2084 1.29169V11.7084"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="absolute inset-0 rounded-full bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </button>
              <p className="absolute lg:relative bottom-2 lg:w-1/2 text-base md:text-xl leading-relaxed">
                From misty mountains to golden beaches, from cultural treasures
                to warm smiles, discover Sri Lanka like never before with a
                guide who knows its heart.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative lg:h-dvh flex px-10 w-full bg-[url(/image/bg2.png)] bg-cover bg-bottom bg-no-repeat">
        <div className="z-10 flex w-full justify-between items-end">
          <img
            src="/image/roy.png"
            alt="Mr Roy Kumara"
            className="hidden lg:block h-3/4 px-4 pr-10"
          />
          <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center h-full">
            <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm md:text-base mb-2">
              {" "}
              Our Story{" "}
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 lg:mb-2">
              Guided by Pride, <br className="hidden" /> Crafted with Care
            </h1>
            <img
              src="/image/roy.png"
              alt="Mr Roy Kumara"
              className="lg:hidden"
            />
            <p className="mt-6 text-base md:text-xl lg:text-justify">
              With over a decade of experience, we've dedicated ourselves to
              crafting unforgettable journeys across Sri Lanka. From the misty
              hills of the highlands to the golden southern shores, we've guided
              travelers through stories of heritage, beautxy, and discovery.
            </p>
            <button className="relative bg-transparent border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
              <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
                Read More{" "}
              </div>
              <div className="w-full z-10 h-full p-4 items-center justify-center rounded-full group-hover:scale-105 bg-[#1e1e1e]">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70831 8.49998H16.2916M16.2916 8.49998L8.99998 1.20831M16.2916 8.49998L8.99998 15.7916"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="absolute rounded-full inset-0 bg-[#1e1e1e] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>
            <div className="mt-12 mb-8 flex flex-row gap-8">
              <div>
                <p className="text-7xl font-bold">10+</p>
                <p className="text-base md:text-xl">Years of experience</p>
              </div>
              <div>
                <p className="text-7xl font-semibold">100+</p>
                <p className="text-base md:text-xl">Happy Explorers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-white/50 bg-linear-to-b from-white to-transparent " />
      </section>

      <section className="p-[50px] flex flex-col gap-2.5 items-center lg:items-start lg:text-left text-center">
        <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm md:text-base mb-2">
          {" "}
          Experiences{" "}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">
          A Journey Shaped by Pride and Passion
        </h1>
        <p className="text-base lg:w-[75%] md:text-xl">
          Every tour is designed to celebrate Sri Lanka’s essence its culture,
          landscapes, and people. From ancient temples to hidden waterfalls,
          every step of your journey is carefully curated with pride and genuine
          passion.
        </p>
        <DeasinationSlider />
      </section>

      <section className="p-4 flex flex-col items-center text-center ">
        <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm md:text-base mb-2">
          {" "}
          Destinations{" "}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">
          A Glimpse of Beauty and Diversity
        </h1>
        <p className="text-base md:text-xl mb-6">
          From mountains to seas, temples to markets, discover the soul of my
          island home.
        </p>
        <Template templateName="gallery" short_code="2691" />
      </section>
      <section className="p-4 flex flex-col items-center text-center overflow-hidden">
        <Testimonials />
      </section>
      <div>
        <section className="relative flex p-4 bg-[url(/image/contactImg.png)] bg-cover bg-bottom bg-no-repeat h-[50dvh] overflow-hidden w-full">
          <div className="z-10 flex flex-col items-center text-center justify-center w-full">
            <p className="text-5xl font-semibold text-white ">
              Are you ready for your next adventure?
            </p>
            <button className="relative bg-transparent border-2 border-[#ffffff] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
              <div className="pl-4 py-2 text-white relative z-10 group-hover:text-[#1e1e1e] transition-colors duration-300">
                Let's Go{" "}
              </div>
              <div className="w-full h-full p-4 items-center justify-center rounded-full group-hover:scale-105 bg-[#ffffff] z-10">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70831 8.49998H16.2916M16.2916 8.49998L8.99998 1.20831M16.2916 8.49998L8.99998 15.7916"
                    stroke="#1e1e1e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="absolute rounded-full inset-0 bg-[#ffffff] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-[#1e1e1e] to-transparent " />
        </section>
      </div>
    </div>
  );
}
