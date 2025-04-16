'use client'
const AboutUsSection = () => {
  // Core values data
  const coreValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
        </svg>
      ),
      name: "Innovation"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      name: "Excellence"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
        </svg>
      ),
      name: "Adaptability"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
      name: "Collaboration"
    }
  ];

  // Service offerings
  const offerings = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      title: "Service"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
        </svg>
      ),
      title: "Requirments"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
        </svg>
      ),
      title: "Solutions"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-8 left-4">
              <div className="h-12 w-12 rounded-full border-2 border-teal-100"></div>
            </div>
            <div className="absolute -top-6 left-8">
              <div className="h-8 w-8 rounded-full border-2 border-pink-100"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-600">Our</span> Mission
              </h3>
              <div className="h-1 w-12 bg-red-600 mb-6"></div>
              <p className="text-gray-700">
                Leading Software Development Company At The Forefront Of The Digital Revolution. With A Passion For Innovation And A Commitment To Excellence, We Specialize In Web And Mobile Developments, AI, Blockchain, Machine Learning, And Mobile App Management Solutions.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-8 left-4">
              <div className="h-12 w-12 rounded-full border-2 border-teal-100"></div>
            </div>
            <div className="absolute -top-6 left-8">
              <div className="h-8 w-8 rounded-full border-2 border-pink-100"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-600">Our</span> Vision
              </h3>
              <div className="h-1 w-12 bg-red-600 mb-6"></div>
              <p className="text-gray-700">
                Our Vision Is To Lead The Charge In Digital Transformation By Developing Pioneering Solutions That Shape The Future. We Envision A World Where Our Expertise In Web And Mobile Developments, AI, Blockchain, Machine Learning, And Mobile App Management Empowers Businesses Across Industries To Embrace Innovation, Optimize Operations, And Create Lasting Value. By Fostering A Culture Of Continuous Learning And Adaptability, We Aim To Be At The Forefront Of Emerging Technologies, Driving Positive Change For Our Clients And Society At Large.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-gray-100 overflow-hidden">
              <div className="flex items-center ml-4 mt-4 mb-2">
                <div className="text-gray-600 mr-2">{value.icon}</div>
              </div>
              <div className="bg-white ml-10 pl-6 py-4 flex items-center h-14">
                <h4 className="font-medium text-gray-800">{value.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Get More Information Button */}
        <div className="flex justify-start mb-16">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 font-medium rounded transition-colors">
            Get More Information
          </button>
        </div>

        {/* Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 shadow-md mb-4 hexagon-container">
                <div className="flex justify-center items-center">
                  {offering.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{offering.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hexagon-container {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          width: 80px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;