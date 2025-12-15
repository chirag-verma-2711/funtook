"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ImageSliderWithZoom() {
  const swiperRef = useRef<any>(null);  // <--- FIX (useRef instead of state)
  const [active, setActive] = useState(0);

  const images = [
    "/images/bigimage.svg",
    "/images/smallimg.svg",
    "/images/smallimg1.svg",
    "/images/smallimg2.svg",
  ];

  return (
    <div className="flex flex-col items-center">

      {/* MAIN IMAGE SWIPER */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col">

      <Swiper
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        className="w-[500px] h-[500px] rounded-xl overflow-hidden"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <ZoomImage src={src} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-4 mt-6">
        {/* thumbnails here */}
      </div>

  </div>


      {/* STATIC THUMBNAILS */}
      <div className="flex gap-4 mt-6">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => {
              setActive(i);
              swiperRef.current?.slideTo(i, 0); // <--- FIX (works every time)
            }}
            className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border 
            ${active === i ? "border-red-500" : "border-gray-300"}`}
          >
            <img src={src} className="w-full h-full object-cover transition-none!" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ——————————————————————————————————
            ZOOM COMPONENT
—————————————————————————————————— */
function ZoomImage({ src }: { src: string }) {
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      className="w-full h-full overflow-hidden cursor-zoom-in"
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onMouseMove={handleMove}
    >
      <img
        src={src}
        className="w-full h-full object-cover"
        style={{
          transformOrigin: `${pos.x}% ${pos.y}%`,
          transform: zoom ? "scale(2)" : "scale(1)",
          transition: "transform 0.2s ease",
        }}
      />
    </div>
  );
}
