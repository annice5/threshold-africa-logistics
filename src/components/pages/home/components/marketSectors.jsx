import React from 'react';
import { Flame, Hammer, Building2, Factory, Signal, ShoppingBag } from 'lucide-react';
import marketSectors from '../../../../assets/images/marketSectors.png';
import { motion } from 'framer-motion';

const sectors = [
  {
    title: 'Petroleum',
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: 'Mining',
    icon: <Hammer className="h-6 w-6" />,
  },
  {
    title: 'Construction',
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: 'Manufacturing',
    icon: <Factory className="h-6 w-6" />,
  },
  {
    title: 'Telecommunication',
    icon: <Signal className="h-6 w-6" />,
  },
  {
    title: 'Retail & FMCG',
    icon: <ShoppingBag className="h-6 w-6" />,
  },
];

const MarketSectors = () => {
  return (
    <section
      id="sectors"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${marketSectors})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#AAF1FF] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Market Sectors We Serve
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-transparent hover:border-[#EBFCFF] p-6 rounded-2xl text-white flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className="mb-4 bg-gradient-to-tr from-[#EFEDCE] to-[#0B5FB0] rounded-full p-4">
                {React.cloneElement(sector.icon, { className: 'h-6 w-6 text-white' })}
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{sector.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSectors;
