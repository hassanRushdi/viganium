'use client';
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

  // Trigger animations manually in sequence
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

  return (
    <div className="py-16">
      {/* Header */}
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={headerControls}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="space-y-6 border-l-4 border-brand-900 pl-6 pt-10"
          variants={containerVariants}
        >
          <motion.div className="w-[320px]" variants={leftItemVariants}>
            <h3 className="text-lg mb-4">Address</h3>
            <p className="text-[#8E8E8E] leading-8">
              8 T N Sama Tower, The Ring Road, Fourth Floor, Office 43.
            </p>
          </motion.div>

          <motion.div className="w-[320px]" variants={leftItemVariants}>
            <h3 className="text-lg mb-4">Address</h3>
            <p className="text-[#8E8E8E] leading-8">
              Saudi Arabia, Riyadh, Al-Malz Neighborhood, Fatima Al-Zahra
              Street, Building No. 5
            </p>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-lg mb-4">Mail</h3>
            <p className="text-[#8E8E8E] leading-8">Viganium@Gmail.Com</p>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-lg mb-4">Phone</h3>
            <p className="text-[#8E8E8E] leading-8">+20 111 5893 336</p>
            <p className="text-[#8E8E8E] leading-8">+20 111 5893 336</p>
          </motion.div>

          <motion.div variants={leftItemVariants}>
            <h3 className="text-lg mb-4">Social Media</h3>
            <motion.div
              className="flex space-x-4 mt-2 mb-4"
              variants={leftItemVariants}
            >
              {[snapChat, x, instagram, linkedin].map((icon, idx) => (
                <div
                  key={idx}
                  className="bg-brand-50 rounded-lg w-fit p-2 mb-6 cursor-pointer hover:bg-brand-100 transition-colors"
                >
                  <Image src={icon} alt="icon" width={25} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form className="space-y-7" variants={containerVariants}>
          <motion.div variants={rightItemVariants}>
            <label className="block text-lg mb-3">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-2 border-[#D2D2D2] rounded-lg focus:outline-none focus:border-[#616161] px-4 py-2 transition-colors"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-lg mb-3">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2 transition-colors"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-lg mb-3">E-Mail</label>
            <input
              type="email"
              placeholder="Example@Gmail.Com"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2 transition-colors"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-lg mb-3">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2 transition-colors"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-lg mb-3">Message</label>
            <textarea
              rows={4}
              placeholder="Let Your Message Here"
              className="w-full border-2 border-[#D2D2D2] focus:outline-none focus:border-[#616161] rounded-lg px-4 py-2 transition-colors"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <button
              type="submit"
              className="bg-black font-semibold text-white px-6 py-3 rounded-lg w-full hover:bg-gray-800 transition-colors"
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
