"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

import logo from "@/public/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const locale = useLocale();

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("services"), path: "/services" },
    { name: t("about"), path: "/about" },
  ];

  return (
    <nav className="bg-[#1E1E1E] text-white px-5 md:px-7 py-5 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center z-20" dir="ltr">
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <Image src={logo} alt="Viganium Logo" width={44} height={44} />
          <p className="font-semibold text-lg px-[1.3px]">Iganium</p>
        </Link>
      </div>

      {/* Menu links - Centered */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-10 text-md font-semibold">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="hover:text-brand-600 transition-colors relative group inline-flex flex-col items-center"
          >
            {link.name}
            <div className="h-[2px] w-0 bg-brand-600 rounded-lg mt-1 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        ))}
      </div>

      {/* Contact Button and Language Switch */}
      <div className="hidden md:flex items-center gap-4 z-20">
        <LanguageSwitcher />

        <Link
          href="/contact-us"
          className="bg-[#BB413D] hover:bg-brand-900 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
        >
          {t("contactUs")}
        </Link>
      </div>

      {/* Mobile Hamburger and Language Button */}
      <div className="md:hidden flex items-center gap-2 z-20">
        {/* Language toggle for mobile */}
        <LanguageSwitcher />

        {/* Hamburger menu */}
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
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="hover:text-brand-600 font-semibold transition-colors w-full"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="bg-[#BB413D] hover:bg-brand-900 font-semibold transition-colors text-white px-4 py-2 rounded w-full text-center"
            onClick={closeMobileMenu}
          >
            {t("contactUs")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
