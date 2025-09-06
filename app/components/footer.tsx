import Link from "next/link"
export default function footer(){
    return(
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
        <div className="border-t-1 w-full text-sm flex flex-col lg:flex-row lg:justify-center text-center items-center gap-2 pt-4">
          <p>
            All Rights Reserved By Roy Tours.{" "}
            <span className="hidden lg:inline">|</span>
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
    )
}