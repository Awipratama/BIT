import React from "react";

import { useNavigate } from "react-router-dom"

export default function CTAContact() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/contact');
  }

  return (
    <section className="CTA relative py-20 px-4 md:px-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800 overflow-hidden">
      {/* Background Kanan */}
      <div
        className="absolute inset-0 animate-gradient-up"
        style={{
          background: "linear-gradient(to top, #02173B, #012D70)",
          backgroundSize: "100% 200%",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
          zIndex: 0,
        }}
      ></div>

      {/* Background Kiri */}
      <div
        className="absolute inset-0 animate-gradient-down"
        style={{
          background: "linear-gradient(to bottom, #02173B, #012D70)",
          backgroundSize: "100% 200%",
          clipPath: "polygon(0 0, 72% 0, 60% 100%, 0% 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Konten */}
      <div className="content relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[72px] text-orange-500">*</h1>
        <h2 className="text-white text-[36px]">
          Shape the future of work revolution with{" "}
          <span className="text-orange-500">Bikin.id</span>
        </h2>
        <p className="text-white text-[20px] w-full md:w-[55%]">
          Through #PowerYourGrowth solutions for businesses and professionals,
          get a free consultation on how we can help your business and team
          grow.
        </p>
        <button onClick={handleButton} className="cursor-pointer uppercase mt-8 px-4 py-2 text-[20px] border border-white bg-white text-[#012D70] rounded-full hover:bg-gray-700 hover:text-white transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
