import React from "react";
import performance from '../../../../assets/images/performance.jpg';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Package, DollarSign, Truck } from 'lucide-react';

const data = [
  {
    name: 'Service 1',
    q1q2: 8,
    q3q4: 12,
  },
  {
    name: 'Service 2',
    q1q2: 14,
    q3q4: 16,
  },
  {
    name: 'Service 3',
    q1q2: 10,
    q3q4: 13,
  },
  {
    name: 'Service 4',
    q1q2: 11,
    q3q4: 19,
  },
];

const statCards = [
  {
    icon: <Package className="text-4xl text-black" />,
    value: '900K+',
    text: 'We have a delivery service for you',
  },
  {
    icon: <DollarSign className="text-4xl text-black" />,
    value: '220K+',
    text: 'We have a delivery service for you',
  },
  {
    icon: <Truck className="text-4xl text-black" />,
    value: '20K+',
    text: 'We have a delivery service for you',
  },
];

const PerformanceChart = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-between"
        style={{
          backgroundImage: `url(${performance})`  // Replace with your actual image path
        }}>
           {/* Overlay */}
    <div className="absolute inset-0  bg-opacity-50 z-10" />

    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Stat Cards */}
      <div className="space-y-6">
        {statCards.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg"
          >
            <div className="bg-white p-2 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-black">{item.value}</h3>
              <p className="text-black text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Chart Section */}
      <div>
        <h2 className="text-yellow-400 text-4xl font-extrabold mb-6">
          OUR <span className="text-white">PERFORMANCES CHART</span>
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="q1q2" fill="#facc15" name="Q1 - Q2" />
            <Bar dataKey="q3q4" fill="#eab308" name="Q3 - Q4" />
          </BarChart>
        </ResponsiveContainer>

        <p className="text-xs text-center mt-2 text-gray-300">
          All numbers in the data are in thousands (k)
        </p>
      </div>
    </div>
  </section>
  )
}

export default PerformanceChart;