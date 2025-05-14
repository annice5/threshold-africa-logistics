import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Factory, Building2, ShoppingBag, Truck, Boxes } from "lucide-react";
import charcoal from '../../assets/images/charcoal.jpg';
import heroThree from '../../assets/images/heroThree.jpg';
import sugarBag from '../../assets/images/sugarBag.jpg';

const MarketSector = () => {
  const images = [charcoal, heroThree, sugarBag ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const sectors = [
    {
      name: "Petroleum & Petrochemicals",
      icon: <Flame className="text-[#0B5FB0] w-10 h-10 mb-3" />,
      description:
        "Supplying PMS, AGO, bitumen, and lubricants through strategic refinery partnerships in the Gulf, UAE, and Iran.",
    },
   
   
    {
      name: "Commodity Trading",
      icon: <ShoppingBag className="text-[#0B5FB0] w-10 h-10 mb-3" />,
      description:
        " sugar, rice, oil, and charcoal",
    },
    {
      name: "Industrial Support Services",
      icon: <Boxes className="text-[#0B5FB0] w-10 h-10 mb-3" />,
      description:
        "Supplying fire safety equipment, engineering tools,mining supplies(Sodium Cyanide) and support for energy and industrial clients.",
    },
    
  ];

  return (
    <div className="flex flex-col">

      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4 sm:px-6 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EFEDCE]">Market Sectors</h1>
          
        </div>
      </motion.section>

      {/* Sectors Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-20 bg-[#0F214D]"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[#AAF1FF]">Our Market Sectors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white/10 text-center p-6 rounded-lg backdrop-blur-md border border-[#EFEDCE] hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center">{sector.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{sector.name}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{sector.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default MarketSector;
