export default function Contact() {
  return (
    <div
      style={{
        backgroundImage: "url('/image/R.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex items-center justify-center text-center p-4"
    >
      <div className="absolute inset-0 bg-white/80 z-0 h-screen"></div>
      <div className="z-10 flex items-center justify-center flex-col rounded-xl text-black w-full">
        <h1 className="text-5xl font-bold mb-4">
          Let’s Plan Your Journey Together
        </h1>
        <p className="text-base sm:text-lg ">
          Got a question or ready to book your adventure? We'd love to hear from
          you.
        </p>
        <a
          href="https://wa.me/94750439266"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative mt-5 bg-transparent justify-center text-black border-2 border-black rounded-full p-1 w-auto text-nowrap flex items-center gap-2 font-semibold md:text-xl group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
            <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
              Send Us a Message{" "}
            </div>

            <div className="w-full z-10 h-full p-4 items-center justify-center rounded-full group-hover:scale-105 bg-black">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79169 11.7084L12.2084 1.29169M12.2084 1.29169H1.79169M12.2084 1.29169V11.7084"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="absolute inset-0 rounded-full bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </button>
        </a>
      </div>
    </div>
  );
}
