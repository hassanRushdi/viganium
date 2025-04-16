"use client";
import { useEffect } from "react";
import Image from "next/image";
import snapChat from "@/public/assets/icons/social/snapchat.svg";
import x from "@/public/assets/icons/social/x.svg";
import instagram from "@/public/assets/icons/social/instagram.svg";
import linkedin from "@/public/assets/icons/social/linkedin.svg";
import { motion, useAnimation } from "framer-motion";

const ContactsUsSection = () => {
  const headerControls = useAnimation();
  const containerControls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const leftItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const rightItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  useEffect(() => {
    const runSequence = async () => {
      await containerControls.start("visible");
      await headerControls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 },
      });
    };

    runSequence();
  }, [containerControls, headerControls]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const company = form.company.value;
    const message = form.message.value;

    const mailtoLink = `mailto:info@viganium.com?subject=Contact%20From%20${name}&body=Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ACompany: ${company}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-1">
      {/* Header */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={headerControls}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full"
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="space-y-4 md:space-y-6 border-l-2 md:border-l-4 border-brand-900 pl-4 md:pl-6 pt-6 md:pt-10"
          variants={containerVariants}
        >
          <motion.div className="w-full sm:w-[320px]" variants={leftItemVariants}>
            <h3 className="text-base sm:text-lg mb-2 sm:mb-4">Address</h3>
            <a
              href="https://www.google.com/maps?q=8+T+N+Sama+Tower,+The+Ring+Road,+Cairo,+Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E8E8E] text-sm sm:text-base leading-6 sm:leading-8 hover:text-brand-900 transition-colors"
            >
              8 T N Sama Tower, The Ring Road, Cairo, Egypt.
            </a>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-base sm:text-lg mb-2 sm:mb-4">E-mail</h3>
            <a
              href="mailto:info@viganium.com"
              className="text-[#8E8E8E] text-sm sm:text-base leading-6 sm:leading-8 hover:text-brand-900 transition-colors"
            >
              info@viganium.com
            </a>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-base sm:text-lg mb-2 sm:mb-4">Phone</h3>
            <a
              href="tel:+201115893336"
              className="text-[#8E8E8E] text-sm sm:text-base leading-6 sm:leading-8 hover:text-brand-900 transition-colors"
            >
              +20 111 5893 336
            </a>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-base sm:text-lg mb-2 sm:mb-4">WhatsApp</h3>
            <a
              href="https://wa.me/201115893336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E8E8E] text-sm sm:text-base leading-6 sm:leading-8 hover:text-brand-900 transition-colors"
            >
              +20 111 5893 336
            </a>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-base sm:text-lg mb-2 sm:mb-4">Social Media</h3>
            <motion.div
              className="flex space-x-3 sm:space-x-4 mt-2 mb-4"
              variants={leftItemVariants}
            >
              {[snapChat, x, instagram, linkedin].map((icon, idx) => (
                <div
                  key={idx}
                  className="bg-brand-50 rounded-lg w-fit p-1.5 sm:p-2 mb-4 sm:mb-6 cursor-pointer hover:bg-brand-100 transition-colors"
                >
                  <Image src={icon} alt="icon" width={20} className="w-5 sm:w-6" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          className="space-y-4 sm:space-y-7"
          variants={containerVariants}
          onSubmit={handleSubmit}
        >
          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full border border-[#D2D2D2] sm:border-2 rounded-lg focus:outline-none focus:border-[#616161] px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Company Name</label>
            <input
              type="text"
              name="company"
              required
              placeholder="Company Name"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Message</label>
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Let Your Message Here"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <button
              type="submit"
              className="bg-black font-semibold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactsUsSection;