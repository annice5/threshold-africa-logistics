import React from 'react';
import { Truck, Warehouse, PackageCheck, Fuel, ShipWheel, Boxes, Settings } from 'lucide-react';
import service from '../../../../assets/images/service.png';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Transportation',
    icon: <Truck className="h-6 w-6" />,
    description: 'Safe and efficient cargo delivery across West Africa.',
  },
  {
    title: 'Warehousing',
    icon: <Warehouse className="h-6 w-6" />,
    description: 'Secure storage facilities with real-time inventory monitoring.',
  },
  {
    title: 'Clearing & Forwarding',
    icon: <PackageCheck className="h-6 w-6" />,
    description: 'Hassle-free clearance and forwarding at all ports and borders.',
  },
  {
    title: 'Fleet Management',
    icon: <Settings className="h-6 w-6" />,
    description: 'Reliable fleet operations for optimized delivery performance.',
  },
  {
    title: 'Customs Brokerage',
    icon: <ShipWheel className="h-6 w-6" />,
    description: 'Expert handling of customs documentation and processes.',
  },
  {
    title: 'Fuel Haulage',
    icon: <Fuel className="h-6 w-6" />,
    description: 'Specialized transport of petroleum products across the region.',
  },
  {
    title: 'Container Haulage',
    icon: <Boxes className="h-6 w-6" />,
    description: 'Smooth inland container movement with tracking systems.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${service})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#AAF1FF] mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          Our Services
        </motion.h2>

        {/* Service Cards Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-[#EFEDCE] rounded-xl p-6 text-left hover:shadow-xl transition duration-300 backdrop-blur-sm bg-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className="mb-2 text-[#0B5FB0]">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
