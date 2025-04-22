"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import flutter from "@/public/assets/icons/about/tech/flutter.svg";
import swift from "@/public/assets/icons/about/tech/swift.svg";
import java from "@/public/assets/icons/about/tech/java.svg";
import react from "@/public/assets/icons/about/tech/react.svg";
import kotlin from "@/public/assets/icons/about/tech/kotlin.svg";
import php from "@/public/assets/icons/about/tech/php.svg";
import python from "@/public/assets/icons/about/tech/python.svg";
import Image from "next/image";

const technologies = [
  {
    title: "React",
    icon: react,
    description:
      "For front-end development, React allows us to build interactive and dynamic user interfaces. Its component-based architecture ensures that we can create fast, scalable, and maintainable web applications, enhancing the overall user experience.",
  },
  {
    title: "Python",
    icon: python,
    description: "Python is our go-to language for data analysis, automation, and AI-driven solutions. Its simplicity and powerful libraries make it an excellent choice for developing machine learning applications, data processing pipelines, and backend services.",
  },
  {
    title: "Kotlin",
    icon: kotlin,
    description: "Kotlin is our language of choice for Android app development. Its compatibility with Java and modern language features allows us to build more efficient, reliable,",
  },
  {
    title: "Swift",
    icon: swift,
    description: "We use Swift for building powerful, native iOS applications. Swift enables us to develop apps with exceptional performance, security, and user experience, making it the perfect choice for iOS-exclusive projects.",
  },
  {
    title: "Flutter",
    icon: flutter,
    description: "Flutter is our preferred tool for cross-platform mobile app development. With Flutter, we create high-performance mobile apps that work seamlessly on both Android and iOS devices, reducing development time while ensuring native ",
  },
  {
    title: "Java",
    icon: java,
    description: "Java is a cornerstone of our backend development, allowing us to create robust, scalable, and secure applications for enterprise-level solutions. Its versatility and reliability make it ideal for large-scale systems, including software management    ",
  },
  {
    title: "PHP",
    icon: php,
    description: "We use PHP for dynamic web development, building flexible and efficient websites and platforms. Whether developing E-Commerce sites or custom web solutions, PHP provides the speed and scalability needed for modern web applications.",
  },
];

export default function TechSection() {
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 20,
            ease: "linear",
          },
        });

        await controls.set({ x: "0%" });
      }
    };

    runAnimation();
  }, [controls]);

  return (
    <section className="w-full bg-[#006B8F1A] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold">
          <span className="text-red-600">Our</span> Technology
        </h2>
        <div className="w-16 h-1 bg-red-600 mt-3 mx-auto rounded" />
      </div>

      <div className="relative overflow-hidden">
        <motion.div className="flex gap-3 w-max" animate={controls}>
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="w-[20rem] flex-shrink-0 h-72 bg-[#343434] text-white p-6 rounded-xl flex flex-col items-center justify-between shadow-lg"
            >
              <Image
                src={tech.icon}
                alt={tech.title}
                width={20}
                height={20}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold">{tech.title}</h3>
              <p className="text-sm  text-center ">
                {tech.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
