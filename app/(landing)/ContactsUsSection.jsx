"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import snapChat from "@/public/assets/icons/social/snapchat.svg";
import x from "@/public/assets/icons/social/x.svg";
import instagram from "@/public/assets/icons/social/instagram.svg";
import linkedin from "@/public/assets/icons/social/linkedin.svg";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

const ContactsUsSection = () => {
  const headerControls = useAnimation();
  const containerControls = useAnimation();
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ""
    });

    try {
      const htmlbody = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <div style="text-align: center; padding: 20px 0;">
                <div style="background-color: #0A1220; border-radius: 12px; padding: 20px; display: inline-block;">
                    <img src="https://vigtas.com/assets/logo-DMBvoa3A.png" alt="Vigtas Logo" style="max-width: 150px; border-radius: 8px;" />
                </div>
            </div>
            <p style="font-size: 16px; color: #555;">
                You have received a new message from the contact us form on Vigtas:
            </p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #1a73e8;">${formData.email}</a></p>
                <p><strong>Company:</strong> ${formData.company}</p>
                <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #1a73e8;">${formData.phone}</a></p>
            </div>
            <div style="margin-top: 20px;">
                <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
                <div style="padding: 15px; background-color: #f0f0f0; border-left: 4px solid #0A1220; font-style: italic; color: #333;">
                    ${formData.message}
                </div>
            </div>
            <p style="font-size: 16px; color: #555; margin-top: 30px;">Best regards,</p>
            <p style="font-size: 16px; font-weight: bold; color: #333;">Vigtas Team</p>
        </div>
      `;
      
      const encodedHtmlBody = encodeURIComponent(htmlbody);
      
      const res = await axios.post(`https://vigtas.com/mail_sender.php?data=${encodedHtmlBody}`, {}, {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (res.status === 200) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "Your message has been sent successfully!"
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Failed to send message. Please try again later."
      });
    }
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
              href="https://wa.me/201090105214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E8E8E] text-sm sm:text-base leading-6 sm:leading-8 hover:text-brand-900 transition-colors"
            >
              +20 1090 105 214
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

{formStatus.isSuccess && (
            <motion.div 
              className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formStatus.message}
            </motion.div>
          )}
          
          {formStatus.isError && (
            <motion.div 
              className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formStatus.message}
            </motion.div>
          )}

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+02 1141052814"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@yourcompany.com"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Company Name</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleInputChange}
              placeholder="viganium"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <label className="block text-base sm:text-lg mb-2 sm:mb-3">Message</label>
            <textarea
              rows={4}
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="write message here"
              className="w-full border border-[#D2D2D2] sm:border-2 focus:outline-none focus:border-[#616161] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
            />
          </motion.div>

          <motion.div variants={rightItemVariants}>
            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className="bg-black font-semibold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactsUsSection;