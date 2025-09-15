import Header from "../components/header";

export default function About() {
  return (
    <div className="text-[#1e1e1e] pt-24 md:pt-0 ">
      <section className="lg:pr-[50px] relative md:min-h-screen flex px-10 w-full bg-[url(/image/bg2.png)] bg-cover bg-bottom bg-no-repeat">
        <div className="z-10 flex w-full justify-between items-end">
          <img
            src="/image/roy.png"
            alt="Mr Roy Kumara"
            className="hidden lg:block h-3/4 pr-10 "
          />
          <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 lg:mb-2">
              Our Journey, <br className="md:hidden" /> Our Passion
            </h1>
            <img
              src="/image/roy.png"
              alt="Mr Roy Kumara"
              className="lg:hidden"
            />
            <p className="mt-6 text-base font-semibold md:text-lg lg:text-justify">
              With over a decade of experience, we’ve dedicated ourselves to
              crafting unforgettable journeys across
            </p>
            <p className="mt-6 text-base md:text-lg lg:text-justify">
              Every traveler has a story, and so do we. Born from a love for Sri
              Lanka’s landscapes, culture, and people, our tours are more than
              itineraries — they are heartfelt experiences crafted with care.
            </p>

            <div className="mt-12 mb-8 flex flex-row gap-8">
              <div>
                <p className="text-7xl font-bold">10+</p>
                <p className="text-base md:text-lg">Years of experience</p>
              </div>
              <div>
                <p className="text-7xl font-semibold">100+</p>
                <p className="text-base md:text-lg">Happy Explorers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay with opacity and gradient */}
        <div className="absolute inset-0 bg-white/50 bg-linear-to-b from-white to-transparent " />
      </section>
      <section className="p-4 lg:min-h-screen flex flex-col lg:items-center lg:justify-center gap-4 lg:px-[50px]">
        <div className="w-full bg-[#D9D9D9] text-center rounded-md p-4 pb-8">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="lg:inline-block lg:w-lg text-base md:text-lg lg:justify-center">
            With over a decade of experience, we’ve dedicated ourselves to
            crafting unforgettable journeys across Sri Lanka. From the misty
            hills of the highlands to the golden southern shores, we’ve guided
            travelers through stories of heritage, beauty,
          </p>
        </div>
        <div className="w-full bg-[#D9D9D9] text-center rounded-md p-4 pb-8">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
            Our Vision
          </h2>
          <p className="lg:inline-block lg:w-lg text-base md:text-lg lg:justify-center">
            With over a decade of experience, we’ve dedicated ourselves to
            crafting unforgettable journeys across Sri Lanka. From the misty
            hills of the highlands to the golden southern shores, we’ve guided
            travelers through stories of heritage, beauty,
          </p>
        </div>
      </section>

      <section className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-center lg:inline-block lg:w-1/2">
          We don’t just guide tours, we create connections that last a lifetime.
        </h1>
        <button className="relative bg-transparent border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
          <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
            Let's Connect{" "}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="absolute rounded-full inset-0 bg-[#1e1e1e] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </button>
      </section>
    </div>
  );
}
