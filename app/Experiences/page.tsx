import Template from "@/app/admin/components/widgets/widget-render"

export default function Experiences() {
  return (
    <div className="lg:px-[50px] flex flex-col gap-8 text-[#1e1e1e]">
      <section className="p-4 pt-24 lg:pt-0 flex flex-col gap-12">
        <div className="flex flex-col lg:min-h-screen items-center text-center justify-center py-20 lg:py-0">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 lg:mb-2">
            Choose Your <span className="text-nowrap">Sri Lankan</span>{" "}
            Adventure
          </h1>
          <p className="text-base md:text-xl lg:w-[60%]">
            Whether you’re seeking cultural depth, scenic escapes, or thrilling
            adventures, we have a journey tailored for you. Explore our
            carefully crafted tours, or let us design something unique just for
            you.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center">
          <h2 className="text-3xl md:text-3xl font-semibold mb-2 lg:mb-2">
            Cultural Treasures Tour
          </h2>
          <p className="text-base md:text-xl lg:w-[75%]">
            Explore ancient cities, sacred temples, and timeless traditions that
            showcase Sri Lanka’s rich cultural heritage.
          </p>
          <Template templateName="slider" short_code="1993" />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center">
          <h2 className="text-3xl md:text-3xl font-semibold mb-2 lg:mb-2">
            Nature & Wildlife Tour
          </h2>
          <p className="text-base md:text-xl lg:w-[75%]">
            Safari in Yala, watch elephants roam in Minneriya, and enjoy the
            serenity of national parks.
          </p>
          <Template templateName="slider" short_code="0258" />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center">
          <h2 className="text-3xl md:text-3xl font-semibold mb-2 lg:mb-2">
            Hill Country Escape
          </h2>
          <p className="text-base md:text-xl lg:w-[75%]">
            Train rides through emerald tea plantations, misty mountain hikes,
            and waterfalls.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:text-left text-center justify-center">
          <h2 className="text-3xl md:text-3xl font-semibold mb-2 lg:mb-2">
            Coastal Paradise Tour
          </h2>
          <p className="text-base md:text-xl lg:w-[75%]">
            Sun, sand, and sea in places like Galle, Mirissa, and Trincomalee.
          </p>
        </div>
      </section>
      <section className="p-4 flex flex-col min-h-screen items-center justify-center py-10 ">
        <h1 className="text-4xl md:text-5xl font-semibold text-center lg:inline-block lg:w-1/2">
          Your journey, your story — let’s create it together.
        </h1>
        <button className="relative bg-transparent border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
          <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
            Start My Adventure{" "}
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
