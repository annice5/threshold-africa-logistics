import React from "react";
import heroOne from "../../../../assets/images/heroOne.jpg";
import heroTwo from '../../../../assets/images/heroTwo.jpg';
import heroThree from '../../../../assets/images/heroThree.jpg';
import charcoal from '../../../../assets/images/charcoal.jpg';
import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Hero = () => {
  const navigate = useNavigate();
  const images = [heroOne, heroThree, heroTwo, charcoal  ]; // Add your images here

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        {/* Title Animation */}
        <motion.h1
          className="text-[#EBFCFF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          WE ARE SOLUTION
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
        <motion.button
               onClick={() => navigate("/service")}
               className="mt-6 inline-block px-6 sm:px-8 py-2 sm:py-3  text-white bg-[#0B5FB0] border hover:bg-transparent  border-[#2BA3EC] font-medium rounded-full transition duration-300"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.4, ease: "easeOut" }}
          >
                        Explore Our Services
        </motion.button>
           </div>
    </section>
  );
};

export default Hero;
