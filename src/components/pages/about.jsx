import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SquareCheckBig } from "lucide-react";

import aboutSlideOne from '../../assets/images/aboutSlideOne.jpg';
import aboutSlideTwo from '../../assets/images/aboutSlideTwo.jpg';
import leadershipImageOne from '../../assets/images/leadershipImageOne.jpeg';
import leadershipImageTwo from '../../assets/images/leadershipImageTwo.jpeg';
import associationLogoOne from '../../assets/images/associationLogoOne.png';
import associationLogoTwo from '../../assets/images/associationLogoTwo.jpg';
import associationLogoThree from '../../assets/images/associationLogoThree.png';

const About = () => {
  const images = [
    aboutSlideOne,
    aboutSlideTwo
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const Counter = ({ target, className }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      if (start === end) return;

      let incrementTime = 1;
      let increment = Math.ceil(end / 200);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [target]);

    return <div className={className}>{count}</div>;
  };

  return (
    <div className="flex flex-col">

      {/* Header Banner */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#EBFCFF] mb-4">
            About Threshold Africa Logistics
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-6 md:px-20 bg-[#0F214D] text-[#AAF1FF]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto text-gray-300">
          Threshold Africa Logistics is a Ghanaian registered logistics, supply chain, and project management company.
          A proud member of the BWA Group, we have been serving Ghana and the Sahel region since 2009 with dedication,
          professionalism, and commitment to excellence.
        </p>
      </motion.section>

      {/* History and Growth Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-20 bg-[#0F214D] text-[#AAF1FF]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Our History and Growth</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <Counter target={2009} className="text-5xl font-bold text-[#0A33E3]" />
            <p className="text-center mt-2 text-gray-300">Founded in Ghana</p>
          </div>

          <div className="flex flex-col items-center">
            <Counter target={2019} className="text-5xl font-bold text-[#0A33E3]" />
            <p className="text-center mt-2 text-gray-300">Reincorporated with expanded focus</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-[#0A33E3]">Present</div>
            <p className="text-center mt-2 text-gray-300">Operating across Ghana & the Sahel</p>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision & Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-20 bg-[#EBFCFF] text-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#0F214D]">Our Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Strategic Statement</h3>
            <p className="text-lg leading-relaxed">
              "We Are Solution" – With the right team, ethics, professionalism, and dedication, we deliver efficient logistics support that ensures value for money.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-lg">
              <SquareCheckBig className="text-[#0A33E3] size-6" /> Competitive Pricing
            </div>
            <div className="flex items-center gap-3 text-lg">
              <SquareCheckBig className="text-[#0A33E3] size-6" /> Regulatory Compliance
            </div>
            <div className="flex items-center gap-3 text-lg">
              <SquareCheckBig className="text-[#0A33E3] size-6" /> Quality Assurance
            </div>
            <div className="flex items-center gap-3 text-lg">
              <SquareCheckBig className="text-[#0A33E3] size-6" /> Efficiency in Delivery
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-20 bg-[#EBFCFF] text-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#0F214D]">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img src={leadershipImageOne} alt="Dr. Tia Ibrahim Braimah" className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2">Dr. Tia Ibrahim Braimah</h3>
            <p className="text-sm text-[#0A33E3] mb-4">Chairman / President</p>
            <p className="text-base leading-relaxed">
              Experienced engineer and entrepreneur with global exposure, delivering strategic leadership across mining, logistics, and energy sectors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img src={leadershipImageTwo} alt="Joseph Kwadwo Afari-Yeboah" className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" />
            <h3 className="text-2xl font-semibold mb-2">Joseph Kwadwo Afari-Yeboah</h3>
            <p className="text-sm text-[#0A33E3]">CEO / Business Development</p>
            <p className="text-base leading-relaxed">
              Project management expert with over 20 years of experience in logistics, business strategy, and the petroleum supply chain across West Africa.
            </p>
          </div>
        </div>
      </motion.section>

      {/* What Makes Us Different Section */}
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-20 bg-[#0F214D] text-[#AAF1FF]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">What Makes Us Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="p-4 text-gray-300">
            <h4 className="text-xl font-semibold mb-2">Regional Expertise</h4>
            <p>Deep understanding and connections in the Sahel region — Burkina Faso, Mali, and Niger.</p>
          </div>
          <div className="p-4 text-gray-300">
            <h4 className="text-xl font-semibold mb-2">Global Partnerships</h4>
            <p>Strategic alliances with top petroleum and industrial suppliers worldwide.</p>
          </div>
          <div className="p-4 text-gray-300">
            <h4 className="text-xl font-semibold mb-2">Financial Strength</h4>
            <p>Robust business and project financing capacity to power major operations.</p>
          </div>
        </div>
      </motion.section>

      {/* Professional Associations */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-20 bg-[#0F214D] text-[#AAF1FF]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Professional Associations</h2>
        <div className="flex flex-wrap justify-center gap-10 text-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center max-w-[150px] text-gray-300">
            <img src={associationLogoTwo} alt="GNCCI Logo" className="w-24 h-24 object-contain mb-2" />
            <p className="text-sm">Ghana National Chamber of Commerce and Industry (GNCCI)</p>
          </div>
          <div className="flex flex-col items-center max-w-[150px] text-gray-300">
            <img src={associationLogoOne} alt="GIFF Logo" className="w-24 h-24 object-contain mb-2" />
            <p className="text-sm">Ghana Institute of Freight Forwarders (GIFF)</p>
          </div>
          <div className="flex flex-col items-center max-w-[150px] text-gray-300">
            <img src={associationLogoThree} alt="PMI Logo" className="w-24 h-24 object-contain mb-2" />
            <p className="text-sm">Project Management Institute of Ghana (PMI)</p>
          </div>
        </div>
      </motion.section>

      

    </div>
  );
};

export default About;
