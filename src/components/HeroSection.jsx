import React, { useEffect, useState, useRef } from "react";

function HeroSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleEnter);
    hero.addEventListener("mouseleave", handleLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleEnter);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800 overflow-hidden">

      {/* Custom Cursor hanya muncul di dalam hero */}
      {active && (
        <div
          className="pointer-events-none absolute w-100 h-100 rounded-full 
            bg-gradient-to-tr from-[#EA2F14] via-[#E6521F] to-[#FB9E3A]
            opacity-70 blur-[140px] z-40"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}

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
          <h1 className="left-heading text-[56px] leading-tight z-50">
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
