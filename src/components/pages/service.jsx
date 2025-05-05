import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Ship, Warehouse, Truck } from "lucide-react";
import aboutSlideOne from '../../assets/images/aboutSlideOne.jpg';
import heroOne from '../../assets/images/heroOne.jpg';

const Service = () => {
  const images = [aboutSlideOne, heroOne];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-[#EFEDCE] text-center px-4 sm:px-6 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-20 bg-[#0F214D] text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[#AAF1FF]">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Purchasing & Supply",
              desc: "Strategic sourcing and timely delivery of industrial and general supplies for energy and manufacturing sectors.",
              icon: <ShoppingCart className="text-[#0B5FB0] w-8 h-8 mb-3" />,
            },
            {
              title: "Port Operations",
              desc: "Freight forwarding and customs clearance services at major ports, ensuring smooth cargo transitions.",
              icon: <Ship className="text-[#0B5FB0] w-8 h-8 mb-3" />,
            },
            {
              title: "Warehousing / Storage",
              desc: "Secure and accessible storage solutions with capacity for bulk and specialized goods.",
              icon: <Warehouse className="text-[#0B5FB0] w-8 h-8 mb-3" />,
            },
            {
              title: "Transport & Haulage",
              desc: "Reliable ground transport for goods across Ghana and the Sahel region with fleet coordination.",
              icon: <Truck className="text-[#0B5FB0] w-8 h-8 mb-3" />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border border-[#EFEDCE] rounded-xl p-6 text-center hover:shadow-xl transition duration-300 backdrop-blur-sm bg-white/10"
            >
              <div className="flex justify-center mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-20 bg-[#0F214D] text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center text-gray-100 text-base sm:text-lg">
          <span className="bg-[#2BA3EC] px-6 py-2 rounded-full">Petroleum & Petrochemicals</span>
          <span className="bg-[#2BA3EC] px-6 py-2 rounded-full">Industrial Support Services</span>
          <span className="bg-[#2BA3EC] px-6 py-2 rounded-full">Commodity Trading</span>
        </div>
      </motion.section>
    </div>
  );
};

export default Service;
