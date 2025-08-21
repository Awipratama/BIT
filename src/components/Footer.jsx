import React from "react";

import Logo from "../assets/Logo.png";

import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-[#02173B] text-white py-20 px-6 md:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-30" />
          </div>
          <div className="flex flex-col justify-between gap-16">
              <h3 className="mt-2 text-[24px] font-medium">PT BIKIN INOVASI TEKNOLOGI</h3>
              <p className="mt-6 text-[20px] text-gray-400">
                Copyright ©2025. All right reserved.
              </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col justify-end">
          <h3 className="text-[#F05A29] text-[24px] font-semibold mb-3">BIKIN.ID</h3>
          <ul className="space-y-2 text-[20px]">
            <li>
              <a href="#" className="hover:text-[#F05A29]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F05A29]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F05A29]">
                Our Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F05A29]">
                Business Insight
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[#F05A29] text-[24px] font-semibold mb-3">OUR CONTACT</h3>
          <p className="text-[20px]">Jalan Sulatri 168x, Denpasar, Bali</p>
          <p className="text-[20px] mb-6">+62 8123-4567-890</p>

          <div className="flex gap-4 text-[30px]">
            <a href="#" className="hover:text-[#F05A29]">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-[#F05A29]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#F05A29]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#F05A29]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
