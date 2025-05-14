import React from 'react';
import { motion } from 'framer-motion';
import contact from '../../../../assets/images/contact.png';
import { Element } from 'react-scroll';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const ContactLanding = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent to Threshold Africa Logistics!");
  };

  return (
    <Element name = 'contact'>
      <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${contact})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Contact Form */}
        <motion.div
          className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 text-white"
          variants={fadeInUp}
          custom={1}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-5 " onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#2BA3EC] hover:bg-[#0A33E3] text-white font-semibold px-6 py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="text-gray-300"
          variants={fadeInUp}
          custom={2}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#AAF1FF]">Contact Details</h3>
          <p className="mb-4">
            We are available to respond to your inquiries, requests, and collaboration opportunities.
          </p>
          <div className="mb-4">
            <p className="font-semibold text-white">Address:</p>
            <p>3rd Floor Springfield Building Meridian, Tema.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-white">Phone:</p>
            <p>+233-20-9219910 / +233-302-941463</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-white">Email:</p>
            <p>thresholdafrica.gh@outlook.com</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
    </Element>
  );
};

export default ContactLanding;
