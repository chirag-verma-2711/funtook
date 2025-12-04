"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const totalSlides = 3;
  const [current, setCurrent] = useState(0); // Start at the first slide (index 0)
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Swipe / Drag
  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = () =>
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  // Touch / Mouse Start
  const handleTouchStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    isDragging.current = true;
    startX.current = e.type.includes("mouse")
      ? (e as React.MouseEvent<HTMLDivElement>).clientX
      : (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
  };

  // Touch / Mouse Move
  const handleTouchMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging.current) return;

    const moveX = e.type.includes("mouse")
      ? (e as React.MouseEvent<HTMLDivElement>).clientX - startX.current
      : (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX - startX.current;

    if (moveX < -50) {
      nextSlide();
      isDragging.current = false;
    } else if (moveX > 50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  // Touch / Mouse End
  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full select-none overflow-hidden"
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }} // Only move one slide at a time
      >
        {/* -------------------------------- SLIDE 1 -------------------------------- */}
        <div className="min-w-[100%] md:min-w-[33.33%] relative overflow-hidden">
          <Image
            src="/assets/home/home_slide1.webp"
            width={1000}
            height={1000}
            alt="Slide 1"
          />
        </div>

        {/* -------------------------------- SLIDE 2 -------------------------------- */}
        <div className="min-w-[100%] md:min-w-[33.33%] relative">
          <Image
            src="/assets/home/home_slide1.webp"
            width={1000}
            height={1000}
            alt="Slide 2"
          />
        </div>

        {/* -------------------------------- SLIDE 3 -------------------------------- */}
        <div className="min-w-[100%] md:min-w-[33.33%] relative">
          <Image
            src="/assets/home/home_slide1.webp"
            width={1000}
            height={1000}
            alt="Slide 3"
          />
        </div>
      </div>

      {/* ---------------------- DOTS ---------------------- */}
      <div className="w-full md:flex hidden justify-center gap-2 ">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)} // Update the current slide index when a dot is clicked
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "w-[30px]" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
