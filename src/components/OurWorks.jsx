import React from "react";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import img7 from "../assets/image7.png";
import img8 from "../assets/image8.png";
import img9 from "../assets/image9.png";
import img10 from "../assets/image10.png";
import img11 from "../assets/image11.png";
import img12 from "../assets/image12.png";

const works = [
  { name: "BikinCV.com", img: img1 },
  { name: "LokerBali.info", img: img2 },
  { name: "LokerJakarta.id", img: img3 },
  { name: "Cari-Kos.com", img: img4 },
  { name: "Resepedia.com", img: img5 },
  { name: "Kooliner.com", img: img6 },
  { name: "AWBaliDigital.com", img: img7 },
  { name: "LowonganHotelBali.com", img: img8 },
  { name: "Weddingku.id", img: img9 },
  { name: "Cvresume.co", img: img10 },
  { name: "Jktliving.com", img: img11 },
  { name: "Balifast.com", img: img12 },
];

export default function OurWorks() {
  return (
    <section className="bg-blue-900 py-16 our-works">
      <div className="px-4 md:px-32 w-full">
        {/* Title */}
        <h2 className="text-white text-[48px] font-normal text-center mb-12">
          Our Works
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-[#00000000]">
              <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-6 transition transform hover:scale-105">
                {/* Logo (petunjuk: taruh logo kamu di /public/images/ dan sesuaikan src) */}
                <img
                  src={work.img}
                  alt={work.name}
                  className="max-h-50 object-contain mb-4"
                />
              </div>
              <p className="text-white text-center font-regular text-sm md:text-xl pt-2">{work.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
