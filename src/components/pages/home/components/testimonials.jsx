import React, { useState } from 'react';
import { motion } from 'framer-motion';
import operationsManager from '../../../../assets/images/operationsManager.jpeg';
import goldLogistics from '../../../../assets/images/goldLogistics.jpeg';
import founderPetromove from '../../../../assets/images/founderPetromove.jpeg';
import efuaD from '../../../../assets/images/efuaD.jpeg';
import testimonial from '../../../../assets/images/testimonial.png';

const testimonials = [
  {
    name: 'Ama Koranteng.',
    role: 'CEO, Gold Logistics',
    image: goldLogistics,
    quote: 'Their service has transformed how we transport our goods. Reliable, efficient, and always on time!',
  },
  {
    name: 'Kwame Agyemang.',
    role: 'Operations Manager, BuildCo',
    image: operationsManager,
    quote: 'Professionalism and dedication at its peak. Our experience has been outstanding every step of the way.',
  },
  {
    name: 'Nana Enisson.',
    role: 'Founder, PetroMove',
    image: founderPetromove,
    quote: 'Top-notch fleet management and fuel haulage. A trusted partner we can always rely on.',
  },
  {
    name: 'Efua Donkor',
    role: 'Logistics Lead, AgriTrans',
    image: efuaD,
    quote: 'They understand the importance of timing in our business. We trust them to deliver every single time.',
  },
];

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: 'spring',
      stiffness: 80,
    },
  }),
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${testimonial})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white"
          variants={fadeUpVariant}
          custom={1}
        >
          What Our Clients Say
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-300 mb-10 text-sm sm:text-base"
          variants={fadeUpVariant}
          custom={2}
        >
          Real stories from businesses we serve
        </motion.p>

        {/* Testimonial Card */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 max-w-md mx-auto"
          variants={fadeUpVariant}
          custom={3}
        >
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#0A33E3] mx-auto"
          />
          <p className="text-white italic mb-4 text-sm sm:text-base">“{currentTestimonial.quote}”</p>
          <h4 className="text-base sm:text-lg font-semibold text-[#0A33E3]">
            {currentTestimonial.name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-300">{currentTestimonial.role}</p>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center mt-6 gap-3"
          variants={fadeUpVariant}
          custom={4}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              } hover:scale-110 transition-transform duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
