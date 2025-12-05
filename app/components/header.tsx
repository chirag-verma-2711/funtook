"use client";
import { useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="">
      <div className="text-center sm:text-lg text-sm font-semibold p-2 text-white bg-(--pinkd)">
        Welcome to our Store! Enjoy 10% off your first order with code:
        WELCOME10
      </div>

      <div className="container mx-auto px-4 lg:py-4 flex">
        <div className="relative lg:hidden flex items-center justify-between h-16">
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full *:lg:w-[33.3%]">
          <div>
            <div className="sm:max-w-[200px] max-w-[100px]">
              <Image
                src="/assets/funtook-logo.svg"
                alt="Funtook"
                className="w-full h-auto"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="w-full max-w-md lg:block hidden">
            <form className="flex items-center mx-auto rounded-md overflow-hidden">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="px-3 py-2.5 bg-(--pinkl) rounded-base outline-none text-heading text-sm block w-full placeholder:text-[#7B7A7A]"
                  placeholder="Search For Decorations...."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center shrink-0 text-white bg-(--pinkd) hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded-base w-10 h-10 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"   // Corrected to camelCase
                    strokeWidth={2}         // Corrected to camelCase
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
            </form>
          </div>

          <div className="flex gap-5 items-center justify-end">
            <Link href="#" className="lg:block hidden">
              <div className="flex gap-1 items-center">
                <Image
                  src="/assets/icons/call.svg"
                  className="w-full h-auto max-w-6"
                  alt="call"
                  width={100}
                  height={100}
                />
                Contact
              </div>
            </Link>
            <Link href="#">
              <div className="flex gap-1 items-center">
                <Image
                  src="/assets/icons/cart.svg"
                  className="w-full h-auto max-w-6"
                  alt="call"
                  width={100}
                  height={100}
                />
                <div className="lg:flex hidden">Cart</div>
              </div>
            </Link>
            <button className="">
              <div className="md:block hidden bg-(--pinkd) text-white py-2 px-5 rounded-md">
                Sign Up
              </div>
              <div className="md:hidden">
                
                <svg
                  className="w-6 h-6 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"  // Corrected `fill-rule` to `fillRule`
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                    clipRule="evenodd"  // Corrected `clip-rule` to `clipRule`
                  />
                </svg>

              </div>
            </button>
          </div>
        </div>
      </div>

      <nav className="">
        <div className="border-t border-b border-gray-300 py-3 lg:block hidden">
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:justify-center space-x-4 *:px-3 *:py-1 *:text-black *:hover:text-(--pinkd) *:transition-all *:ease-in-out">
            <Link href="#Birthday">Birthday</Link>
            <Link href="#Anniversary">Anniversary</Link>
            <Link href="#Baby-Welcome">Baby Welcome</Link>
            <Link href="#Other-Categories">Other Categories</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
          <div
            className="px-2 pt-2 pb-3 space-y-1 *:text-black *:block *:px-3 *:py-2 *:rounded-md *:text-base *:font-medium *:hover:bg-gray-700">
            <Link href="#Birthday">Birthday</Link>
            <Link href="#Anniversary">Anniversary</Link>
            <Link href="#Baby-Welcome">Baby Welcome</Link>
            <Link href="#Other-Categories">Other Categories</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
