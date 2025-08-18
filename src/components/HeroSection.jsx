import React, { useEffect, useState } from "react";

function HeroSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800 overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-32 h-32 rounded-full 
             bg-gradient-to-r from-[#00B4D8] via-[#48CAE4] to-[#90E0EF]
             opacity-70 blur-2xl z-50"
        style={{
          transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
        }}
      ></div>
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
      <div className="relative z-10 flex h-screen">
        {/* Kiri */}
        <div className="w-2/3 flex flex-col justify-end px-32 pb-20 text-white">
          <h1 className="left-heading text-[56px] leading-tight">
            We are a{" "}
            <span className="text-orange-500">technology company </span>that
            offers <br />a wide range of solutions <br /> for your digital needs
          </h1>
        </div>

        {/* Kanan */}
        <div className="flex-1 flex items-end px-16 pb-20 text-white">
          <p className="right-heading max-w-md text-2xl">
            from website development, CV-building platforms, to job search
            platforms. We are here to deliver the best with a strong focus on
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
