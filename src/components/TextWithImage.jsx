import React from "react";
import HandImage from "../assets/image13.png"

export default function TextWithImage() {
  return (
    <section class="text-img bg-linear-to-t from-[#ffffff] to-[#99B9EB] p-32 relative">
      <div className="flex justify-center items-center gap-18">
          {/* <!-- Text --> */}
          <div class="hero-text w-full">
            <h1 className="text-[#012D70] text-[48px]">
              An integrated digital solution with
              <span class="text-[#F05A29]"> guaranteed security and scalability</span>
            </h1>
            <p className="text-[20px] text-[#898895]">
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
