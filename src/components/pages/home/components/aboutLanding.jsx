import React from 'react';
import about from '../../../../assets/images/about.png';
import aboutImage from '../../../../assets/images/aboutImage.jpeg';
import { motion } from 'framer-motion';

const AboutLanding = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left column - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <img
            src={aboutImage}
            alt="About Threshold Africa"
            className="w-full max-w-md md:max-w-full h-auto object-cover rounded-[60px_0_60px_60px]"
          />
        </motion.div>

        {/* Right column - Text */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <div className="p-6 sm:p-8 md:p-10 max-w-xl text-white">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              About Threshold Africa
            </motion.h2>
            <motion.p
              className="mb-4 leading-relaxed text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            >
              Threshold Africa Logistics Ltd is a Ghanaian registered logistics company, part of the BWA Group, with
              operations extending across Ghana, Burkina Faso, Mali, and Niger.
            </motion.p>
            <motion.p
              className="mb-4 leading-relaxed text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              Established in 2009 and re-incorporated in 2019, the company is driven by a mission to provide innovative,
              efficient, and sustainable supply chain solutions throughout West Africa.
            </motion.p>
            <motion.p
              className="leading-relaxed text-gray-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            >
              Our team of seasoned professionals, extensive network, and commitment to integrity make us a trusted
              partner in the petroleum, industrial, and trade sectors.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLanding;
