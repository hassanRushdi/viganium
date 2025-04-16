"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logofull from "@/public/assets/images/logo-full.png";
import logo from "@/public/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1E1E1E] text-white px-5 md:px-7 py-5 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center z-20">
        <Link href="/home" className="flex items-center">
          <Image src={logo} alt="Viganium Logo" width={44} height={44} />
          <p className="font-semibold text-lg px-[1.3px]">Iganium</p>
        </Link>
      </div>

      {/* Menu links - Centered */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-10 text-md font-semibold">
        {["Home", "Services", "About"].map((link, index) => (
          <Link
            key={index}
            href={`/home${link === 'Home' ? '' : `/${link.toLowerCase()}`}`}
            className="hover:text-brand-600 transition-colors relative group inline-flex flex-col items-center"
          >
            {link}
            <div className="h-[2px] w-0 bg-brand-600 rounded-lg mt-1 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <div className="hidden md:block z-20">
        <Link
          href="/contact-us"
          className="bg-[#BB413D] hover:bg-brand-900 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-brand-800 focus:outline-none transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1c1c1c] flex flex-col items-start p-5 gap-4 md:hidden z-10">
          {["Home", "Services", "About"].map((link, index) => (
            <Link
              key={index}
              href={`/home${link === 'Home' ? '' : `/${link.toLowerCase()}`}`}
              className="hover:text-brand-600 font-semibold transition-colors"
            >
              {link}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="bg-[#BB413D] hover:bg-brand-900 font-semibold transition-colors text-white px-4 py-2 rounded"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
