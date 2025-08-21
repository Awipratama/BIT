import React from "react";
import HandImage from "../assets/image13.png"

export default function TextWithImage() {
  return (
    <section class="text-img bg-linear-to-t from-[#ffffff] to-[#99B9EB] px-4 py-10 md:px-32 md:py-32 relative">
      <div className="flex flex-col md:flex-row justify-center items-center gap-18">
          {/* <!-- Text --> */}
          <div class="hero-text w-full">
            <h1 className="text-[#012D70] text-[34px] md:text-[48px] text-center md:text-left pb-4 md:pb-0">
              An integrated digital solution with
              <span class="text-[#F05A29]"> guaranteed security and scalability</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#898895]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
              mauris id eros interdum sagittis a ut eros. Nunc scelerisque imperdiet
              ex pretium consequat. Vivamus viverra fermentum aliquam. Aliquam
              tristique, orci vel vulputate vehicula, erat libero convallis quam,
              vitae laoreet dolor nisi nec elit.
            </p>
          </div>
          <div className="hand-image w-full z-9">
            <img src={HandImage} alt="HandImage" />
          </div>
      </div>
    </section>
  );
}
