"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function footer() {
   const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

  return (
    <div className={`${!isAdmin ? "block" : "hidden"}`}>
      <footer className=" bg-[#1e1e1e] text-white hidden sm:block pt-8">
        <div className="flex flex-row justify-between w-full items-end px-[50px]">
          <h2 className="text-6xl font-semibold w-1/2">
            Let’s Plan Your Journey Together
          </h2>
          <p className="font-normal w-1/2 text-xl">
            Got a question or ready to book your adventure? We’d love to hear
            from you.
          </p>
        </div>
        <div className="flex justify-between items-center px-[50px]">
          <div className="w-1/2 py-20">
            <Image
              src={"/image/logo-white.png"}
              width={270}
              height={70}
              alt="Roy Tours Logo"
            ></Image>
          </div>

          <div className="w-1/2 text-xl py-20">
            <h4 className="font-semibold text-gray-400">Quick Links</h4>
            <ul className="flex text-nowrap gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Our Story</Link>
              </li>
              <li>
                <Link href="/Experiences">Experiences</Link>
              </li>
              <li>
                <Link href="/contact">Destinations</Link>
              </li>
              <li>
                <Link href="/contact">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-1 w-full text-sm flex flex-col lg:flex-row lg:justify-center text-center items-center gap-2">
          <p>
            All Rights Reserved By Roy Tours.{" "}
            <span className="hidden lg:inline">|</span>
          </p>
          <span className="flex items-center gap-2 py-2">
            Developed By
            <a href="https://www.cloudwave.asia">
              <img
                src="\image\cloudwave.png"
                alt="Developer Logo"
                className="h-[15px]"
              />
            </a>{" "}
          </span>
        </div>
      </footer>
      <footer className="p-4 bg-[#1e1e1e] text-white text-center items-center flex flex-col sm:hidden block">
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
              <Link href="/Experiences">Experiences</Link>
            </li>
            <li>
              <Link href="/contact">Destinations</Link>
            </li>
            <li>
              <Link href="/contact">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="\image\roy-Logo-white.png"
            alt="Roy Tours Logo"
            className="w-[199px] mt-6 mb-4"
          />
        </div>
        <div className="border-t-1 w-full text-sm flex flex-col lg:flex-row lg:justify-center text-center items-center gap-2 pt-4">
          <p>
            All Rights Reserved By Roy Tours.{" "}
            <span className="hidden lg:inline">|</span>
          </p>
          <span className="flex items-center gap-2">
            Developed By
            <img
              src="\image\cloudwave.png"
              alt="Developer Logo"
              className="h-[15px]"
            />{" "}
          </span>
        </div>
      </footer>
    </div>
  );
}
