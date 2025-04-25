import React from "react";
import hero from "../../../../assets/images/hero.jpg";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        {/* Title Animation */}
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Efficient Logistics Across West Africa
        </motion.h1>

        {/* Text Animation */}
        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Delivering seamless supply chain solutions from Ghana to the Sahel region.
        </motion.p>

        {/* Button Animation */}
        <motion.a
          href="#services"
          className="mt-6 inline-block px-6 sm:px-8 py-2 sm:py-3 border border-[#0A33E3] text-white hover:bg-[#0A33E3] font-medium rounded-full transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
