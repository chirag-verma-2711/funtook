"use client";  // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
// @ts-ignore
import { Navigation, Pagination } from 'swiper';

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto py-15 px-5">
      <div className="swiper-container w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1560: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative w-full h-80">
            <Image 
              src="/assets/home/heroslider/hero_aniversary.webp"
              alt="hero_aniversary"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              width={1000}
              height={1000}
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative w-full h-80">
            <Image 
              src="/assets/home/heroslider/hero_birthday.webp"
              alt="hero_birthday"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              width={1000}
              height={1000}
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="relative w-full h-80">
            <Image 
              src="/assets/home/heroslider/hero_shower.webp"
              alt="hero_shower"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
