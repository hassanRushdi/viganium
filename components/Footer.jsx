"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logoFull from "@/public/assets/images/logo-full.png";
import location from "@/public/assets/icons/footer/location.svg";
import call from "@/public/assets/icons/footer/call.svg";
import sms from "@/public/assets/icons/footer/sms.svg";
import facebook from "@/public/assets/icons/footer/facebook.svg";
import instagram from "@/public/assets/icons/footer/instagram.svg";
import linkedin from "@/public/assets/icons/footer/linkedin.svg";
import snapchat from "@/public/assets/icons/footer/snapchat.svg";
import tiktok from "@/public/assets/icons/footer/tiktok.svg";

const Footer = () => {
  const t = useTranslations("footer");

  const links = [
    { key: "home", href: "/" },
    { key: "services", href: "/services" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact-us" },
    { key: "privacyPolicy", href: "/privacy-policy" },
    { key: "terms", href: "/terms-and-conditions" },
    { key: "faq", href: "/faq" }
  ];

  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="w-[90%] mx-auto py-12 px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-[100px]">
        {/* Left Section */}
        <div className="space-y-10">
          <div className="mb-4">
            <Image src={logoFull} alt="Viganium Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-gray-300 leading-[30px] max-w-xs">
            {t("description")}
          </p>
          <div className="flex gap-3 md:pt-10">
            {[snapchat, instagram, tiktok, linkedin, facebook].map((icon, index) => (
              <button
                key={index}
                className="bg-[#F7EAE9] w-10 h-10 rounded flex items-center justify-center min-w-[40px]"
              >
                <Image src={icon} alt="social-icon" width={20} height={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-900 font-semibold mb-4">{t("quickLinks")}</h3>
          <ul className="space-y-2 text-sm">
            {links.map(({ key, href }) => (
              <li key={key}>
                <Link href={href} className="hover:text-red-600 transition-colors">
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-brand-900 font-semibold mb-4">{t("contactUs")}</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Image src={location} alt="location" width={16} height={16} className="mt-1 min-w-[16px]" />
              <Link
                href="https://maps.app.goo.gl/YLVfwLBiDq95hbpd7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                {t("address")}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Image src={call} alt="phone" width={16} height={16} className="mt-1 min-w-[16px]" />
              <a href="tel:+201115893336" className="hover:text-red-600 transition-colors">
                {t("phone")}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Image src={sms} alt="email" width={16} height={16} className="mt-1 min-w-[16px]" />
              <a href="mailto:info@viganium.com" className="hover:text-red-600 transition-colors">
                {t("email")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;