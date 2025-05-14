import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.jpeg';

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const Footer = () => {
  return (
    <footer className="relative bg-[#c0dadf] text-white py-12 px-4 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Column 1: Company */}
        <motion.div variants={fadeInUp} custom={1}>
          <div className="text-white font-bold text-2xl tracking-wider flex gap-1 items-center">
            <img src={logo} alt="logo" className="size-11 rounded-full" />
            Threshold Africa.
          </div>
          <p className="text-shadow-md text-white mt-3 font-thin">
            Reliable logistics and supply chain services across West Africa.
          </p>
        </motion.div>

        {/* Column 2: Navigation */}
        <motion.div variants={fadeInUp} custom={2}>
          <h4 className="font-semibold mb-4 text-lg text-white">Quick Links</h4>
          <ul className="space-y-2  text-shadow-md font-thin text-white">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#sectors" className="hover:underline">Market Sectors</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>

        {/* Column 3: Contact */}
        <motion.div variants={fadeInUp} custom={3}>
          <h4 className="font-semibold mb-4 text-lg text-white">Contact</h4>
          <p className="text-shadow-md font-thin text-white">3rd Floor Springfield Building Meridian, Tema.</p>
          <p className="text-shadow-md font-thin mt-2 text-white">+233-20-9219910 / +233-302-941463</p>
          <p className="text-shadow-md font-thin text-white">thresholdafrica.gh@outlook.com</p>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border-t border-white/20 mt-10 pt-6 text-center text-shadow-md text-white relative z-10"
        variants={fadeInUp}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Threshold Africa Logistics Ltd. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
