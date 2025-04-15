'use client'
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import saas from "@/public/assets/icons/saas.svg";
import ai from '@/public/assets/icons/ai.svg'
import mobDev from '@/public/assets/icons/mob-dev.svg'
import software from '@/public/assets/icons/software.svg'
import logo from "@/public/assets/images/logo.png";
import heroImage from '@/public/assets/images/hero-image.png'
import icon1 from '@/public/assets/icons/icontl.svg'
import icon2 from '@/public/assets/icons/icontr.svg'
import icon3 from '@/public/assets/icons/iconbl.svg'
import icon4 from '@/public/assets/icons/iconbr.svg'
import Image from "next/image";

const HeroSection = () => {
  const slideFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -30 },
    visible: { opacity: 1, rotate: 0 }
  };

  return (
    <section className="w-[95%] mx-auto relative py-8 md:py-16 px-4 overflow-hidden">
      {/* Circle icons */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={slideFromTop}
        transition={{ delay: 0, type: "spring", stiffness: 80, duration: 0.4 }}
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-[60px] z-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] aspect-[1/1] max-w-none border border-[#D7CBCA] rounded-full z-0">

          <motion.div 
            variants={slideFromLeft}
            transition={{ delay: 0.2, type: "spring", stiffness: 80, duration: 0.4 }}
            className="absolute p-3 rounded-full shadow-sm bg-[#F7EAE9]" 
            style={{ left: 'calc(50% - 50% * 0.9659)', top: 'calc(50% - 50% * 0.2588)', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Image src={icon1} alt="SaaS icon" width={25} height={25} />
            </div>
          </motion.div>

          <motion.div 
            variants={slideFromLeft}
            transition={{ delay: 0.3, type: "spring", stiffness: 80, duration: 0.4 }}
            className="absolute p-3 rounded-full shadow-sm bg-[#F7EAE9]" 
            style={{ left: 'calc(50% - 50% * 0.9659)', top: 'calc(50% + 50% * 0.2588)', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Image src={icon3} alt="Mobile dev icon" width={25} height={25} />
            </div>
          </motion.div>

          <motion.div 
            variants={slideFromRight}
            transition={{ delay: 0.4, type: "spring", stiffness: 80, duration: 0.4 }}
            className="absolute p-3 rounded-full shadow-sm bg-[#F7EAE9]" 
            style={{ left: 'calc(50% + 50% * 0.9659)', top: 'calc(50% - 50% * 0.2588)', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Image src={icon2} alt="Software icon" width={25} height={25} />
            </div>
          </motion.div>

          <motion.div 
            variants={slideFromRight}
            transition={{ delay: 0.5, type: "spring", stiffness: 80, duration: 0.4 }}
            className="absolute p-3 rounded-full shadow-sm bg-[#F7EAE9]" 
            style={{ left: 'calc(50% + 50% * 0.9659)', top: 'calc(50% + 50% * 0.2588)', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Image src={icon4} alt="AI icon" width={25} height={25} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Logo */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={rotateIn}
        transition={{ delay: 0.6, type: "spring", stiffness: 80, duration: 0.4 }}
        className="relative z-10 mb-4 md:mb-6 flex justify-center"
      >
        <Image src={logo} alt="Logo" width={70} height={70} className="w-[70px] md:w-[90px]" />
      </motion.div>

      {/* Heading */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={slideFromRight}
        transition={{ delay: 0.8, type: "spring", stiffness: 80, duration: 0.4 }}
        className="flex justify-center items-center"
      >
        <h2 className="relative z-10 text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-black max-w-[320px] sm:max-w-[580px]">
          <span className="text-red-600">Start Your Business</span>{" "}
          With Every Thing You Need
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.p 
        initial="hidden"
        animate="visible"
        variants={slideFromRight}
        transition={{ delay: 1.0, type: "spring", stiffness: 80, duration: 0.4 }}
        className="relative z-10 text-gray max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 md:mb-10 text-center text-sm md:text-base"
      >
        We build custom software, mobile apps, and digital platforms that help businesses grow, streamline
        operations, and engage their customers.
      </motion.p>

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
        {/* Mobile Image */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          transition={{ delay: 1.2, type: "spring", stiffness: 80, duration: 0.4 }}
          className="mb-6 md:hidden relative z-10"
        >
          <Image 
            src={heroImage} 
            priority
            alt="Digital workspace illustration" 
            className="w-full max-w-[300px]"
          />
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6">
          {/* Left Cards */}
          <div className="flex flex-col gap-4 md:gap-6 w-full sm:w-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideFromLeft}
              transition={{ delay: 1.4, type: "spring", stiffness: 80, duration: 0.4 }}
            >
              <Card
                icon={saas}
                header="Saas Platforms"
                body="These platforms are designed for ease of use, high availability, and customization to meet specific business requirements."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideFromLeft}
              transition={{ delay: 1.6, type: "spring", stiffness: 80, duration: 0.4 }}
            >
              <Card
                icon={mobDev}
                header="Mobile App Development"
                body="Viganium creates powerful mobile applications that offer seamless user experiences."
              />
            </motion.div>
          </div>

          {/* Desktop Image */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={scaleUp}
            transition={{ delay: 1.8, type: "spring", stiffness: 80, duration: 0.4 }}
            className="hidden md:block mx-4 relative z-10"
          >
            <Image 
              src={heroImage} 
              alt="Digital workspace illustration" 
              className="w-[300px] lg:w-[500px]"
            />
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4 md:gap-6 w-full sm:w-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideFromRight}
              transition={{ delay: 2.0, type: "spring", stiffness: 80, duration: 0.4 }}
            >
              <Card
                icon={software}
                header="Software Development"
                body="We specialize in custom software development, delivering tailored solutions across various industries."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideFromRight}
              transition={{ delay: 2.2, type: "spring", stiffness: 80, duration: 0.4 }}
            >
              <Card
                icon={ai}
                header="AI Automation"
                body="Start your business with every tool you need, powered by intelligent automation."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
