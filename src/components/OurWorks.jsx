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
  { name: "BikinCV.com", img: img1, link: "https://www.bikincv.com/" },
  { name: "LokerBali.info", img: img2, link: "https://www.lokerbali.info/" },
  { name: "LokerJakarta.id", img: img3, link: "https://www.lokerjakarta.id/" },
  { name: "Cari-Kos.com", img: img4, link: "https://www.cari-kos.com/" },
  { name: "Reseppedia.com", img: img5, link: "https://www.reseppedia.com/" },
  { name: "Kooliner.com", img: img6, link: "https://www.kooliner.com/" },
  { name: "AWBaliDigital.com", img: img7, link: "https://www.awbalidigital.com/" },
  { name: "LowonganHotelBali.com", img: img8, link: "https://www.lowonganhotelbali.com/" },
  { name: "Weddingku.id", img: img9, link: "https://www.weddingku.id/" },
  { name: "Cvresume.co", img: img10, link: "https://www.cvresume.co/" },
  { name: "Jktliving.com", img: img11, link: "https://www.jktliving.com/" },
  { name: "Balifast.com", img: img12, link: "https://www.balifast.com/" },
];

export default function OurWorks() {
  return (
    <section id="ourworks" className="bg-blue-900 py-16 our-works">
      <div className="px-4 md:px-32 w-full">
        {/* Title */}
        <h2 className="text-white text-[48px] font-normal text-center mb-12">
          Our Works
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {works.map((work, index) => (
            <a href={work.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00000000]">
              <div key={index} className="bg-[#00000000]">
                <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-6 transition transform hover:scale-105 cursor-pointer">
                  {/* Logo (petunjuk: taruh logo kamu di /public/images/ dan sesuaikan src) */}
                  <img
                    src={work.img}
                    alt={work.name}
                    className="max-h-50 object-contain mb-4"
                  />
                </div>
                <p className="text-white text-center font-regular text-sm md:text-xl pt-2 hover:underline cursor-pointer">{work.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
