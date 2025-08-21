import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger dan close
import Logo from "../assets/Logo.png"; // ganti path sesuai punya kamu

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScroll(true);
      }
      else {
        setScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full pt-6 pb-4 px-6 z-50 transition-all duration-300 ${scrolled ? "bg-[#00000000]" : "bg-[#012D70] shadow-md"}`}>
      <div className="flex justify-around items-center">
        {/* Logo */}
        <div className="flex gap-4 items-end py-2">
          <img src={Logo} alt="main-logo" className="h-16 w-auto" />
          <h2 className="text-white font-semibold text-lg">
            PT BIKIN INOVASI TEKNOLOGI
          </h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-10 text-white text-[20px] font-bold">
            <li>
              <a href="#" className="active hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Our Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#012D70] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu List */}
        <ul className="flex flex-col gap-6 text-white font-bold p-6">
          <li>
            <a href="#" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              Our Works
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;