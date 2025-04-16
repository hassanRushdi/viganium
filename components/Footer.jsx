import Link from "next/link";
import Image from "next/image";

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
  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="w-[90%] mx-auto py-12 px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-[100px]">
        {/* Left Section */}
        <div className="space-y-10">
          <div className="mb-4">
            <Image src={logoFull} alt="Viganium Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-gray-300 leading-[30px] max-w-xs">
            Welcome To Viganium, A Leading Software Development Company At The
            Forefront Of The Digital Revolution.
          </p>
          <div className="flex gap-3 md:pt-10">
            {[snapchat, instagram, tiktok, linkedin, facebook].map(
              (icon, index) => (
                <button
                  key={index}
                  className="bg-[#F7EAE9] w-10 h-10 rounded flex items-center justify-center min-w-[40px]"
                >
                  <Image
                    src={icon}
                    alt="social-icon"
                    width={20}
                    height={20}
                    className="w-5 h-5" // Fixed size for icons
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-900 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "Services",
              "About",
              "Contact Us",
              "Privacy Policy",
              "Terms and Conditions",
              "FAQ",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Home"
                      ? "/home"
                      : `/home/${item.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="hover:text-red-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-brand-900 font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Image
                src={location}
                alt="location"
                width={16}
                height={16}
                className="mt-1 min-w-[16px]"
              />
              <Link
                href="https://maps.google.com/?q=8+T+N+Sama+Tower,+The+Ring+Road,+Cairo,+Egypt"
                target="_blank"
                className="hover:text-red-600 transition-colors"
              >
                8 T N Sama Tower, The Ring Road, Cairo, Egypt
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src={call}
                alt="phone"
                width={16}
                height={16}
                className="mt-1 min-w-[16px]"
              />
              <a
                href="tel:+201115893336"
                className="hover:text-red-600 transition-colors"
              >
                +20 111 5893 336
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src={sms}
                alt="email"
                width={16}
                height={16}
                className="mt-1 min-w-[16px]"
              />
              <a
                href="mailto:info@viganium.com"
                className="hover:text-red-600 transition-colors"
              >
                info@viganium.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
