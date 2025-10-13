import React from "react";
import HandImage from "../assets/image13.png";

export default function TextWithImage() {
  return (
    <section className="text-img bg-linear-to-t from-[#ffffff] to-[#99B9EB] px-4 py-10 md:px-32 md:py-32 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center gap-18">
        {/* <!-- Text --> */}
        <div className="hero-text w-full">
          <h2 className="text-[#012D70] text-[28px] md:text-[48px] text-center md:text-left pb-4 md:pb-8">
            Driven by Innovation,
            <span className="text-[#F05A29]"> Trusted for Excellence</span>
          </h2>
          <p className="text-[16px] md:text-[20px] text-center md:text-start text-[#898895]">
            For years, we’ve been empowering brands and individuals through
            reliable technology and creative expertise. Our commitment goes
            beyond delivering digital products — we build long-term partnerships
            that inspire growth and success. With a proven record across web
            development, career platforms, and digital ecosystems, we turn
            vision into measurable impact.
          </p>
        </div>
        <div className="hand-image w-full z-9">
          <img src={HandImage} alt="HandImage" />
        </div>
      </div>
    </section>
  );
}
