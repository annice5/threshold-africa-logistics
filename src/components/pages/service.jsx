import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Ship, Warehouse, Truck, Flame, ShoppingBag, Boxes } from "lucide-react";
import heroTwo from '../../assets/images/heroTwo.jpg';
import heroThree from '../../assets/images/heroThree.jpg';
import heroFour from '../../assets/images/heroFour.jpeg';
import sugarBag from '../../assets/images/sugarBag.jpg';
import charcoal from '../../assets/images/charcoal.jpg';
import heroOne from '../../assets/images/heroOne.jpg';

const Service = () => {
  const images = [heroTwo, heroOne, heroThree, heroFour, sugarBag,charcoal];
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
        <div className="absolute inset-0 bg-black/50 z-0"></div>
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
              title: "Warehousing and Transit",
              desc: "Secure and accessible storage solutions with capacity for bulk and specialized goods.",
              icon: <Warehouse className="text-[#0B5FB0] w-8 h-8 mb-3" />,
            },
            {
              title: "Transport & Haulage",
              desc: "Reliable ground transport for goods across Ghana and the Sahel region with fleet coordination.",
              icon: <Truck className="text-[#0B5FB0] w-8 h-8 mb-3" />,
            },
            {
               title: "Petroleum & Petrochemicals",
               desc: "Supplying PMS, AGO, bitumen, and lubricants through strategic refinery partnerships in the Gulf,    UAE, and Iran.",
               icon: <Flame className="text-[#0B5FB0] w-10 h-10 mb-3" />,
            },
           {
               title: "Commodity Trading",
               desc: " Sugar, Rice, Oil, and Charcoal ",
               icon: <ShoppingBag className="text-[#0B5FB0] w-10 h-10 mb-3" />,
           }, 
           {
              title: "Industrial Support Services",
              desc:"Supplying fire safety equipment, engineering tools,mining supplies(Sodium Cyanide) and support for energy and industrial clients.",
              icon: <Boxes className="text-[#0B5FB0] w-10 h-10 mb-3" />,
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

     
    </div>
  );
};

export default Service;
