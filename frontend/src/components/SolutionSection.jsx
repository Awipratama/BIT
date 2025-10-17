import React from "react";

export default function SolutionSection() {
  return (
    <section id="solution" className="flex flex-col px-4 md:px-10 lg:px-32 py-20">
      <h2 className="solution-heading text-center text-[30px] md:text-[48px] text-[#012D70] pb-10">
        Transforming Ideas into Digital Impact
      </h2>
      <div className="grid md:flex md:flex-wrap lg:grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card w-[47%] transition duration-300 ease-out bg-[#003C97] hover:bg-linear-to-t hover:from-[#8A3418] hover:to-[#F05A29] text-white px-8 md:px-6 py-16 text-left">
          <h2 className="text-stone-400 text-[64px] h-20 px-4">*</h2>
          <h5 className="text-[24px] md:text-[40px] px-4 pb-2">
            Empowering Digital Growth
          </h5>
          <p className="w-full md:w-full text-[16px] md:text-[20px] px-4">
            We help businesses and individuals thrive through smart digital
            solutions that connect ideas, technology, and opportunity.
          </p>
          {/* <button className='py-2 px-4 mt-8 text-[16px] md:text-[20px] mx-4 outline-solid rounded-3xl btn-text hover:bg-white hover:text-black hover:outline-white'>Learn More</button> */}
        </div>
        <div className="card w-[47%] transition duration-300 ease-out bg-[#003C97] hover:bg-linear-to-t hover:from-[#8A3418] hover:to-[#F05A29] text-white px-8 md:px-6 py-16 text-left">
          <h2 className="text-stone-400 text-[64px] h-20 px-4">*</h2>
          <h5 className="text-[24px] md:text-[40px] px-4 pb-2">
            Innovate. Connect. Evolve.
          </h5>
          <p className="w-full md:w-full text-[16px] md:text-[20px] px-4">
            From web development to career platforms, we build a connected
            digital ecosystem designed for progress and efficiency.
          </p>
          {/* <button className='py-2 px-4 mt-8 text-[16px] md:text-[20px] mx-4 outline-solid rounded-3xl btn-text hover:bg-white hover:text-black hover:outline-white'>Learn More</button> */}
        </div>
        <div className="card w-[100%] transition duration-300 ease-out bg-[#003C97] hover:bg-linear-to-t hover:from-[#8A3418] hover:to-[#F05A29] text-white px-8 md:px-6 py-16 text-left">
          <h2 className="text-stone-400 text-[64px] h-20 px-4">*</h2>
          <h5 className="text-[24px] md:text-[40px] px-4 pb-2">
            Technology with Purpose
          </h5>
          <p className="w-full md:w-full text-[16px] md:text-[20px] px-4">
            We believe every innovation should have meaning — creating value,
            opportunity, and sustainable growth for everyone.
          </p>
          {/* <button className='py-2 px-4 mt-8 text-[16px] md:text-[20px] mx-4 outline-solid rounded-3xl btn-text hover:bg-white hover:text-black hover:outline-white'>Learn More</button> */}
        </div>
      </div>
    </section>
  );
}
