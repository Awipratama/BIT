import React from "react";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Kanan */}
      <div
        className="absolute inset-0 animate-gradient-up"
        style={{
          background: "linear-gradient(to top, #002855, #003566)",
          backgroundSize: "100% 200%",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
          zIndex: 0,
        }}
      ></div>

      {/* Background Kiri */}
      <div
        className="absolute inset-0 animate-gradient-down"
        style={{
          background: "linear-gradient(to bottom, #002855, #003566)",
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
