import React from 'react';

export default function SolutionSection() {
    return (
        <section id="solution" className='flex flex-col px-4 md:px-32 py-20'>
            <h2 className="solution-heading text-center text-[30px] md:text-[48px] text-[#012D70] pb-10">Find the Your Best Solution</h2>
            <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="card transition duration-300 ease-out bg-[#003C97] hover:bg-linear-to-t hover:from-[#8A3418] hover:to-[#F05A29] text-white px-0 py-12 text-left">
                    <h2 className='text-stone-400 text-[64px] h-20 px-4'>*</h2>
                    <h5 className='text-[24px] md:text-[40px] px-4 pb-2'>Cloud Base Software</h5>
                    <p className='w-full md:w-75 text-[16px] md:text-[20px] px-4'>Cloud-based software with agility and scalability to accelerate operations and business decision-making.</p>
                    <button className='py-2 px-4 mt-8 text-[16px] md:text-[20px] mx-4 outline-solid rounded-3xl btn-text hover:bg-white hover:text-black hover:outline-white'>Learn More</button>
                </div>
                <div className="card transition duration-300 ease-out bg-[#003C97] hover:bg-linear-to-t hover:from-[#8A3418] hover:to-[#F05A29] text-white px-0 py-12 text-left">
                    <h2 className='text-stone-400 text-[64px] h-20 px-4'>*</h2>
                    <h5 className='text-[24px] md:text-[40px] px-4 pb-2'>Support Software</h5>
                    <p className='w-full md:w-75 text-[16px] md:text-[20px] px-4'>A modern solution and innovation focused on supporting benefits, funding, and business application development.</p>
                    <button className='py-2 px-4 mt-8 text-[16px] md:text-[20px] mx-4 outline-solid rounded-3xl btn-text hover:bg-white hover:text-black hover:outline-white'>Learn More</button>
                </div>
                <div className="card transition duration-300 ease-out bg-[#003C97] hover:bg-linear-to-t hover:from-[#8A3418] hover:to-[#F05A29] text-white px-0 py-12 text-left">
                    <h2 className='text-stone-400 text-[64px] h-20 px-4'>*</h2>
                    <h5 className='text-[24px] md:text-[40px] px-4 pb-2'>Professional Services</h5>
                    <p className='w-full md:w-75 text-[16px] md:text-[20px] px-4'>A range of services and programs specifically designed to enhance the skills and capabilities of both business executors and decision-makers.</p>
                    <button className='py-2 px-4 mt-8 text-[16px] md:text-[20px] mx-4 outline-solid rounded-3xl btn-text hover:bg-white hover:text-black hover:outline-white'>Learn More</button>
                </div>
            </div>
        </section>
    )
}