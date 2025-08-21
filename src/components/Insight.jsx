import React from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const insights = [
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 15.png", // taruh gambar di public/images/
  },
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 16.png",
  },
];

export default function Insight() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16">
      <div className="px-4 md:px-32">
        {/* Title */}
        <h2 className="insight-header text-center text-[48px] font-regular text-blue-900 mb-10">
          Business Insight
        </h2>

        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button className="p-3 hidden md:block rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition">
            <FaArrowLeft size={20} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {insights.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />

                {/* Content */}
                <div className="bg-[#898895] p-8">
                  <h3 className="card-title text-4xl font-regular text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="card-desc text-white mb-6">{item.desc}</p>
                  <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-gray-700 hover:text-white transition">
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="p-3 hidden md:block rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
