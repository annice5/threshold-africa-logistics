import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import ecgLogo from '../../../../assets/images/ecgLogo.png';
import ildo from '../../../../assets/images/ildo.png';
import jse from '../../../../assets/images/jse.png';
import partners from '../../../../assets/images/partners.jpeg';

const logos = [ecgLogo, ildo, jse];

const Partners = () => {
  return (
    <section
      id="partners"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${partners})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Trusted by Partners & Clients
        </motion.h2>

        {/* Description Animation */}
        <motion.p
          className="text-gray-200 mb-10 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        >
          We proudly collaborate with industry leaders
        </motion.p>

        {/* Marquee with Animated Logos */}
        <Marquee pauseOnHover gradient={false} speed={40} className="gap-10">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="mx-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }} // Adds a slight zoom effect on hover
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-300"
              />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
