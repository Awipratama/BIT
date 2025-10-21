import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger dan close
import Logo from "../assets/Logo.png"; // ganti path sesuai punya kamu
import { useLocation } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setScroll(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isContactPage = location.pathname === "/contact";

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full pt-6 pb-4 px-4 md:px-10 lg:px-32 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#00000000]" : "bg-[#012D70] shadow-md"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 lg:gap-4 items-end py-2">
          <a href="/">
            <img src={Logo} alt="main-logo" className="h-8 md:h-16 w-auto" />
          </a>

          {isContactPage ? (
            <h2 className="text-white font-semibold text-sm lg:text-lg">
              <a href="/">PT BIKIN INOVASI TEKNOLOGI</a>
            </h2>
          ) : (
            <h1 className="text-white font-semibold text-sm lg:text-lg">
              PT BIKIN INOVASI TEKNOLOGI
            </h1>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center pt-0 md:pt-10 lg:pt-0">
          <ul className="flex gap-10 md:gap-6 lg:gap-10 text-white text-[20px] font-bold">
            <li className="link-navbar">
              <a
                href="/#solution"
                className="active scroll-smooth hover:text-orange-500 transition"
              >
                About
              </a>
            </li>
            <li className="link-navbar">
              <a
                href="/#ourworks"
                className="hover:text-orange-500 transition scroll-smooth"
              >
                Our Works
              </a>
            </li>
            <li className="link-navbar">
              <a
                href="/contact"
                className="hover:text-orange-500 transition scroll-smooth"
              >
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
        className={`fixed top-0 right-0 h-full w-84 bg-[#012D70] shadow-lg transform ${
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
        <ul className="flex flex-col gap-6 text-white font-semibold p-10 text-[24px]">
          <li>
            <a
              href="/#solution"
              className="hover:text-gray-300 transition font-tomorrow"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#ourworks"
              className="hover:text-gray-300 transition font-tomorrow"
              onClick={() => setIsOpen(false)}
            >
              Our Works
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-300 transition font-tomorrow"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
        <p className="mt-6 text-[16px] pl-10 md:text-[20px] md:flex lg:hidden md:justify-center pt-140 md:pt-10 text-gray-400">
          Copyright ©2025. All right reserved.
        </p>
      </div>
    </nav>
  );
}

export default Navigation;
