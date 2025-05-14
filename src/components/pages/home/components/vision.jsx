import React from "react";
import vision from '../../../../assets/images/vision.jpg';

const Vision = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-between"
    style={{
      backgroundImage: `url(${vision})`  // Replace with your actual image path
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0  bg-opacity-50 z-10" />

    {/* Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
      
      {/* Left Text Section */}
      <div className="text-white space-y-6">
        <h2 className="text-[#f4b712] text-5xl font-extrabold leading-tight">
          OUR <br /> <span className="text-[#f8cb70]">VISION</span>
        </h2>

        {/* Vision Points */}
        <div className="space-y-6 mt-6">
          {[1, 2, 3].map((num, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center bg-[#f4b712] text-black font-bold rounded-full p-4">
                {num}
              </div>
              <p className="text-sm text-white leading-relaxed">
                Excepteur cupidatat commodo adipisicing labore dolor Lorem et qui do sit ad velit reprehenderit ad adipisicing nulla ex ut quis.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Empty Column (for spacing / alignment) */}
      <div className="hidden md:block" />
    </div>
  </section>
  )
}

export default Vision;