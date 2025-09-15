"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsBlur(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <header
      className={`${!isAdmin ? "fixed top-0 left-0 w-full z-50" : "hidden"}`}
    >
      <nav
        className={`flex items-center justify-between p-4 transition-transform duration-300 ${
          isBlur ? "backdrop-blur-sm" : ""
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Image
          src="/image/logo.png"
          alt="Roytours Logo"
          width={100}
          height={32}
        />

        <ul className="md:flex hidden space-x-6 font-medium">
          <li>
            <Link
              className={
                pathname === "/" ? "font-bold text-black" : "text-gray-700"
              }
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/about" ? "font-bold text-black" : "text-gray-700"
              }
              href="/about"
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/Experiences"
                  ? "font-bold text-black"
                  : "text-gray-700"
              }
              href="/Experiences"
            >
              Experiences
            </Link>
          </li>
          <li className="hidden">
            <Link
              className={
                pathname === "/destinations"
                  ? "font-bold text-black"
                  : "text-gray-700"
              }
              href="/destinations"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/gallery"
                  ? "font-bold text-black"
                  : "text-gray-700"
              }
              href="/gallery"
            >
              Gallery
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="relative sm:flex hidden bg-transparent text-[#1e1e1e] border-2 border-[#1e1e1e] rounded-full p-1 w-auto text-nowrap items-center gap-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer"
        >
          {" "}
          <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
            {" "}
            Let’s travel{" "}
          </div>{" "}
          <div className="w-full h-full p-2 items-center justify-center rounded-full bg-[#1e1e1e] group-hover:scale-105 z-10">
            {" "}
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                fill="#ffffff"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <span className="absolute rounded-full inset-0 bg-[#1e1e1e] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>{" "}
        </Link>
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 9H24.25M1.75 1.5H24.25M1.75 16.5H24.25"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 bg-white z-50 flex flex-col p-6 space-y-6 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                className="self-end mb-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ✕
              </button>

              <ul className="flex flex-col gap-6 text-lg font-medium">
                <li>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiences"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
              <Link
                href="/contact"
                className="relative bg-transparent text-[#1e1e1e] border-2 border-[#1e1e1e] rounded-full px-4 py-2 font-semibold group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer mt-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Let’s travel
                </span>
                <span className="absolute rounded-full inset-0 bg-[#1e1e1e] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
