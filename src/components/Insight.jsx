import React, { useState, useEffect, useRef } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const insights = [
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 15.png", // taruh gambar di public/images/
  },
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 16.png",
  },
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 16.png",
  },
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 16.png",
  },
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 16.png",
  },
  {
    title: "Cloud based software",
    desc: "Cloud-based software with agility and scalability to accelerate operations and business decision-making.",
    img: "/images/image 16.png",
  },
];

export default function Insight() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  // drag state
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [, setScrollX] = useState(0);

  // Cek ukuran layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile
      } else {
        setItemsPerSlide(2); // desktop
      }
    };

    handleResize(); // jalan pertama kali
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(insights.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollX(current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch support (mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
    setStartX(e.touches[0].pageX);
    setScrollX(current);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section
      id="insight"
      className="bg-gradient-to-b from-blue-100 to-white py-16"
    >
      <div className="px-4 md:px-32">
        {/* Title */}
        <h2 className="insight-header text-center text-[28px] md:text-[48px] font-regular text-blue-900 mb-10">
          Business Insight
        </h2>

        {/* Mobile Slider (1 card per slide, auto + drag) */}
        <div className="md:hidden overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {insights.map((item, i) => (
              <div
                key={i}
                className="min-w-full bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="bg-[#898895] p-8">
                  <h3 className="card-title text-2xl font-regular text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="card-desc text-white mb-6">{item.desc}</p>
                  <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-gray-700 hover:text-white transition">
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-8 mt-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
            >
              <FaArrowLeft size={20} />
            </button>
            <div className="md:hidden flex justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full ${
                    current === i ? "bg-blue-900" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop: 2 card per slide + arrow navigation */}
        <div className="hidden md:flex items-center gap-4 relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Slider container */}
          <div className="overflow-hidden flex-1 cursor-grab active:cursor-grabbing">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-2 gap-6"
                >
                  {insights
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((item, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl overflow-hidden shadow-md"
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          draggable="false"
                          onDragStart={(e) => e.preventDefault()}
                          className="w-full h-60 object-cover"
                        />
                        <div className="bg-[#898895] p-8">
                          <h3 className="card-title text-3xl font-regular text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="card-desc text-white mb-6">
                            {item.desc}
                          </p>
                          <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-gray-700 hover:text-white transition">
                            LEARN MORE
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Dots indicator (desktop) */}
        <div className="hidden md:flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-blue-900" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
