"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f7f8fa] to-[#e8eaed] py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#1f2937] mb-10 leading-tight">
          Thank You For Your <br />
          Interest In <span className="text-[#1e293b]">Viganium</span>
        </h2>

        {/* Contact Form */}
        <div className="bg-white border-[10px] border-gray shadow-md rounded-xl p-6 md:p-8 mb-12">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            👋 How Can We Help You ?
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="border border-gray rounded-md p-3 focus:outline-none "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="border border-gray rounded-md p-3 focus:outline-none "
            />
            <input
              type="email"
              name="email"
              placeholder="Example@Gmail.Com"
              onChange={handleChange}
              className="border border-gray rounded-md p-3 focus:outline-none "
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="border border-gray rounded-md p-3 focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Let Your Message Here"
              onChange={handleChange}
              rows={4}
              className="border border-gray rounded-md p-3 md:col-span-2 resize-none focus:outline-none "
            />
            <button
              type="submit"
              className="md:col-span-2 btn-gray py-3 px-6 w-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map & Contact Info */}
        <div className="w-full mb-12">
          <div className="w-full h-[300px] rounded-lg overflow-hidden border-[8px] border-gray shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=8+T+N+Sama+Tower,+The+Ring+Road,+Cairo,+Egypt&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full rounded-lg "
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm sm:text-base text-black">
          <div>
            <h4 className="font-bold text-brand-900 ">Call Us</h4>
            <p className="pt-5">+20 111 5693 336</p>
          </div>
          <div>
            <h4 className="font-bold text-brand-900">E-Mail</h4>
            <p className="pt-5">info@viganium.com</p>
          </div>
          <div>
            <h4 className="font-bold text-brand-900">Address</h4>
            <p className="pt-5">B T N Sama Tower, The Ring Road, Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
