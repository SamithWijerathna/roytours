import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
export default function Home() {
  return (
    <div className="text-[#1e1e1e]">
      <section>
        <Header></Header>
        <div className="relative rounded-2xl h-[85dvh] mx-4 mb-4 flex items-center justify-center lg:justify-around text-center overflow-hidden p-2">
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 -z-10" />

          {/* Content */}
          <div className="max-w-xl text-white flex flex-col items-center lg:items-start lg:text-left lg:pl-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experience the <br />
              Magic of Sri Lanka
            </h1>
            <div className="flex flex-col items-center lg:flex-row lg:gap-4 lg:w-full">
              <button className="bg-transparent justify-center text-[#ffffff] border-2 border-[#ffffff] rounded-full p-1 w-auto text-nowrap flex items-center gap-2 font-semibold md:text-xl">
                <div className="pl-4 py-2">Start Your Adventure </div>
                <div className="w-full h-full p-4 items-center justify-center rounded-full bg-[#ffffff]">
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <p className="absolute lg:relative bottom-2  text-base md:text-xl leading-relaxed">
                From misty mountains to golden beaches, from cultural treasures
                to warm smiles, discover Sri Lanka like never before with a
                guide who knows its heart.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex p-4 bg-[url(/image/bg2.png)] bg-cover bg-bottom bg-no-repeat">
        <div className="z-10 flex flex-col items-center text-center">
          <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm md:text-base mb-2">
            {" "}
            Our Story{" "}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guided by Pride, Crafted with Care
          </h1>
          <img src="/image/roy.png" alt="Mr Roy Kumara" />
          <p className="mt-6 text-base  md:text-xl">
            With over a decade of experience, we’ve dedicated ourselves to
            crafting unforgettable journeys across Sri Lanka. From the misty
            hills of the highlands to the golden southern shores, we’ve guided
            travelers through stories of heritage, beauty, and discovery.
          </p>
          <button className="bg-transparent border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold">
            <div className="pl-4 py-2">See More </div>
            <div className="w-full h-full p-4 items-center justify-center rounded-full bg-[#1e1e1e]">
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

        {/* Overlay with opacity and gradient */}
        <div className="absolute inset-0 bg-white/50 bg-linear-to-b from-white to-transparent " />
      </section>

      <section className="p-4 flex flex-col items-center text-center">
        <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm md:text-base mb-2">
          {" "}
          Experiences{" "}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          A Journey Shaped by Pride and Passion
        </h1>
        <p className="text-base md:text-xl">
          Every tour is designed to celebrate Sri Lanka’s essence — its culture,
          landscapes, and people. From ancient temples to hidden waterfalls,
          every step of your journey is carefully curated with pride and genuine
          passion.
        </p>
        <div className=" flex flex-row mt-6">
          <div className="flex items-center justify-center object-cover">
            <Image
              src="/image/train.png"
              alt="Experiences"
              width={1200}
              height={1200}
              className="rounded-2xl"
            />
          </div>
        </div>
        <button className="bg-transparent border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold">
          <div className="pl-4 py-2">See More </div>
          <div className="w-full h-full p-4 items-center justify-center rounded-full bg-[#1e1e1e]">
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
        </button>
      </section>

      <section className="p-4 flex flex-col items-center text-center ">
        <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm md:text-base mb-2">
          {" "}
          Destinations{" "}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          A Glimpse of Beauty and Diversity
        </h1>
        <p className="text-base md:text-xl mb-6">
          From mountains to seas, temples to markets, discover the soul of my
          island home.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 flex flex-col items-center text-center">
        <div className="px-4 py-2 border-1 border-[1e1e1e] w-fit h-fit rounded-full text-sm mb-2">
          {" "}
          Testimonials{" "}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Memories Shared by Travelers Before You
        </h1>
        <p className="text-base md:text-xl mb-6">
          Don’t just take our word for it. Here’s what fellow travelers have to
          say about their journeys through Sri Lanka:
        </p>
        <div className="flex flex-row gap-6">
          <div className="w-2/3 h-80 rounded-md shadow-md bg-white flex flex-col text-left p-4">
            <div className="text-8xl justify-start">“</div>
            <p className="text-sm md:text-base">
              Roy Tours made our holiday stress-free and magical. Every detail
              was taken care of, and we discovered places we’d never have found
              on our own.
            </p>
            <p className=" text-sm mt-6 font-semibold">Emma</p>
            <p className="text-sm">United Kingdom</p>
          </div>
          <div className="w-2/3 h-80 rounded-md shadow-md bg-white flex flex-col text-left p-4">
            <div className="text-8xl justify-start">“</div>
            <p className="text-sm md:text-base">
              Roy Tours made our holiday stress-free and magical. Every detail
              was taken care of, and we discovered places we’d never have found
              on our own.
            </p>
            <p className=" text-sm mt-6 font-semibold">Emma</p>
            <p className="text-sm">United Kingdom</p>
          </div>
        </div>
      </section>
      <section className="relative flex p-4 bg-[url(/image/contactImg.png)] bg-cover bg-bottom bg-no-repeat h-[50dvh]">
        <div className="z-10 flex flex-col items-center text-center justify-center">
          <p className="text-5xl font-semibold text-white ">
            Are you ready for your next adventure?
          </p>
          <button className="bg-transparent border-2 border-[#ffffff] rounded-full p-1 w-auto text-nowrap flex items-center mt-6 gap-2 font-semibold">
            <div className="pl-4 py-2 text-white">Let's Go </div>
            <div className="w-full h-full p-4 items-center justify-center rounded-full bg-[#ffffff]">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1e1e1e] to-transparent " />
      </section>
      <footer className="p-4 bg-[#1e1e1e] text-white text-center items-center flex flex-col">
        <h1 className="text-4xl font-semibold mb-2">
          Let’s Plan Your Journey Together
        </h1>
        <p className="text-base mb-6">
          Got a question or ready to book your adventure? We’d love to hear from
          you.
        </p>
        <div className="flex flex-col text-center items-center gap-2">
          <h4 className="font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-2 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Our Story</Link>
            </li>
            <li>
              <Link href="/contact">Experiences</Link>
            </li>
            <li>
              <Link href="/contact">Destinations</Link>
            </li>
            <li>
              <Link href="/contact">Gallery</Link>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="\image\Roy Tours Logo White.png"
            alt="Roy Tours Logo"
            className="w-[199px] mt-6 mb-4"
          />
        </div>
        <div className="border-t-1 w-full text-sm flex flex-col text-center items-center gap-2 pt-4">
          <p>
            All Rights Reserved By Roy Tours. <span className="hidden">|</span>
          </p>
          <span className="flex items-center gap-2">
            Developed By
            <img
              src="\image\cloud wave.png"
              alt="Developer Logo"
              className="h-[15px]"
            />{" "}
          </span>
        </div>
      </footer>
    </div>
  );
}
