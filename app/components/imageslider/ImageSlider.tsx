"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CENTER_WIDTH = 520;
const SIDE_WIDTH = 360;
const GAP = 24;

export default function ImageSlider() {
  /* ---------------- STATE ---------------- */
  const [slides, setSlides] = useState([
    "/images/slider1.svg",
    "/images/slider2.svg",
    "/images/slider3.svg",
  ]);

  const [active, setActive] = useState(1); // mobile only
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* ---------------- SCREEN DETECT ---------------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- ROTATION HELPERS (DESKTOP) ---------------- */
  const rotateClockwise = () => {
    setSlides((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      copy.push(first!);
      return copy;
    });
  };

  const rotateAntiClockwise = () => {
    setSlides((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      copy.unshift(last!);
      return copy;
    });
  };

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      if (isMobile) {
        setActive((p) => (p + 1) % slides.length);
      } else {
        rotateClockwise();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isMobile, slides.length]);

  /* ---------------- SWIPE SUPPORT ---------------- */
  useEffect(() => {
    let startX = 0;
    const slider = sliderRef.current;
    if (!slider) return;

    const start = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const end = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;

      if (isMobile) {
        if (diff > 50) setActive((p) => (p + 1) % slides.length);
        if (diff < -50)
          setActive((p) => (p - 1 + slides.length) % slides.length);
      } else {
        if (diff > 50) rotateClockwise();
        if (diff < -50) rotateAntiClockwise();
      }
    };

    slider.addEventListener("touchstart", start);
    slider.addEventListener("touchend", end);

    return () => {
      slider.removeEventListener("touchstart", start);
      slider.removeEventListener("touchend", end);
    };
  }, [isMobile, slides.length]);

  /* ---------------- MOBILE VIEW (UNCHANGED) ---------------- */
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-center">
        <div
          ref={sliderRef}
          className="relative w-full h-[220px] overflow-hidden"
        >
          <Image
            src={slides[active]}
            alt="Decoration"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <div className="flex gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                active === i ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- DESKTOP VIEW (FINALLY CORRECT) ---------------- */
  const activeIndex = 1; // centre image

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={sliderRef}
        className="relative w-full max-w-6xl mx-auto overflow-hidden py-10"
      >
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          
        >
          {slides.map((img, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => {
                  if (index === 0) rotateAntiClockwise();
                  if (index === 2) rotateClockwise();
                }}
                className={`relative shrink-0 rounded-2xl cursor-pointer transition-all duration-500
                  ${
                    isActive
                      ? "z-20 opacity-100 scale-100"
                      : "z-10 opacity-70 scale-95"
                  }
                `}
                style={{
                  width: isActive ? CENTER_WIDTH : SIDE_WIDTH,
                  height: isActive ? 300 : 220,
                  marginRight: GAP,
                }}
              >
                <Image
                  src={img}
                  alt="Decoration"
                  fill
                  className="rounded-2xl object-cover"
                  priority={isActive}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop dots */}
      <div className="flex gap-2 mt-4">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 1 ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
