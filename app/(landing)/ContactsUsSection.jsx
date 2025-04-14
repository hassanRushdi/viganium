import Image from "next/image";
import snapChat from "@/public/assets/icons/social/snapchat.svg";
import x from "@/public/assets/icons/social/x.svg";
import instagram from "@/public/assets/icons/social/instagram.svg";
import linkedin from "@/public/assets/icons/social/linkedin.svg";
import React from "react";

const ContactsUsSection = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 border-l-4 border-brand-900 pl-6 pt-10">
          <div className="w-[320px]">
            <h3 className="text-lg mb-4">Address</h3>
            <p className="text-[#8E8E8E] leading-8">
              8 T N Sama Tower, The Ring Road, Fourth Floor, Office 43.
            </p>
          </div>
          <div className="w-[320px]">
            <h3 className="text-lg mb-4">Address</h3>
            <p className="text-[#8E8E8E] leading-8">
              Saudi Arabia, Riyadh, Al-Malz Neighborhood, Fatima Al-Zahra
              Street, Building No. 5
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-4">Mail</h3>
            <p className="text-[#8E8E8E] leading-8">Viganium@Gmail.Com</p>
          </div>
          <div>
            <h3 className="text-lg mb-4">Phone</h3>
            <p className="text-[#8E8E8E] leading-8">+20 111 5893 336</p>
            <p className="text-[#8E8E8E] leading-8">+20 111 5893 336</p>
          </div>
          <div>
            <h3 className="text-lg mb-4">Social Media</h3>
            <div className="flex space-x-4 mt-2 mb-4">
              <div className="bg-brand-50 rounded-lg w-fit p-2 mb-6 cursor-pointer">
                <Image src={snapChat} alt="logo" width={25} />
              </div>

              <div className="bg-brand-50 rounded-lg w-fit p-2 mb-6 cursor-pointer">
                <Image src={x} alt="logo" width={25} />
              </div>

              <div className="bg-brand-50 rounded-lg w-fit p-2 mb-6 cursor-pointer">
                <Image src={instagram} alt="logo" width={25} />
              </div>

              <div className="bg-brand-50 rounded-lg w-fit p-2 mb-6 cursor-pointer">
                <Image src={linkedin} alt="logo" width={25} />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-7">
          <div>
            <label className="block text-lg mb-3">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-2 border-[#D2D2D2] rounded-lg focus:outline-none focus:border-[#616161] px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-lg mb-3">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-lg mb-3">E-Mail</label>
            <input
              type="email"
              placeholder="Example@Gmail.Com"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-lg mb-3">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-lg mb-3">Message</label>
            <textarea
              rows="4"
              placeholder="Let Your Message Here"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black font-semibold text-white px-6 py-2 rounded w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsUsSection;
