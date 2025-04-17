import React from "react";

const MissionVisionSection = () => {
  return (
    <div>
      <section className="w-[85%] mx-auto py-16 px-6 md:px-1">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
            <div className="w-12 h-1 bg-red-600 mb-4" />
            <p className="text-gray-700 leading-relaxed text-justify">
              At Viganium, our mission is to empower our clients with
              cutting-edge technology solutions that drive growth, efficiency,
              and sustainability. We aim to be a trusted partner, leveraging our
              expertise to create transformative experiences that propel
              businesses to new heights. Through our dedication to innovation,
              collaboration, and customer satisfaction, we strive to build
              lasting relationships that make a positive impact on our clients'
              success.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">Our Vision</h2>
            <div className="w-12 h-1 bg-red-600 mb-4" />
            <p className="text-gray-700 leading-relaxed text-justify">
              Our vision is to lead the charge in digital transformation by
              developing pioneering solutions that shape the future. We envision
              a world where our expertise in web and mobile developments, AI,
              blockchain, machine learning, and mobile app management empowers
              businesses across industries to embrace innovation, optimize
              operations, and create lasting value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionSection;
