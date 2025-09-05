import Header from "../components/header";

export default function About() {
  return (
    <div>
      <Header />
      <section className="relative flex px-10 w-full h-screen bg-[url(/image/bg2.png)] bg-cover bg-bottom bg-no-repeat">
        <div className="z-10 flex w-full justify-between items-end">
          <img
            src="/image/roy.png"
            alt="Mr Roy Kumara"
            className="hidden lg:block h-auto w-1/2 px-10"
          />
          <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center w-1/2 h-full">
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
            <p className="mt-6 text-base md:text-xl text-justify">
              With over a decade of experience, we’ve dedicated ourselves to
              crafting unforgettable journeys across Sri Lanka. From the misty
              hills of the highlands to the golden southern shores, we’ve guided
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

        {/* Overlay with opacity and gradient */}
        <div className="absolute inset-0 bg-white/50 bg-linear-to-b from-white to-transparent " />
      </section>
    </div>
  );
}
