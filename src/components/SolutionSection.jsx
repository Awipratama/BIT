import React from 'react';

export default function SolutionSection() {
    return (
        <section className='flex flex-col p-20'>
            <h2 className="solution-heading text-center text-[48px] text-[#012D70]">Find the Your Best Solution</h2>
            <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="card bg-[#003C97] text-white p-8">
                    <h2 className='text-stone-400 text-[64px] h-20'>*</h2>
                    <h5 className='text-[36px]'>Cloud Base Software</h5>
                    <p>Cloud-based software with agility and scalability to accelerate operations and business decision-making.</p>
                    <button className='p-4'>Learn More</button>
                </div>
                <div className="card bg-linear-to-t from-[#8A3418] to-[#F05A29] text-white p-8 hover:bg-[#003C97]">
                    <h2 className='text-stone-400 text-[64px] h-20'>*</h2>
                    <h5>Cloud Base Software</h5>
                    <p>Cloud-based software with agility and scalability to accelerate operations and business decision-making.</p>
                    <button>Learn More</button>
                </div>
                <div className="card bg-[#003C97] text-white p-8">
                    <h2 className='text-stone-400 text-[64px] h-20'>*</h2>
                    <h5>Cloud Base Software</h5>
                    <p>Cloud-based software with agility and scalability to accelerate operations and business decision-making.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </section>
    )
}