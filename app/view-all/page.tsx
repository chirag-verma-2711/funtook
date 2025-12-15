// import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function viewall() {
  return (
    <div className="w-full container mx-auto px-6 py-4 md:px-4 md:py-10">
      <div className=" flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2 mb-5">
        <p className="text-left text-2xl md:text-3xl font-semibold bg-black bg-clip-text text-transparent">
          Birthday Decoration
        </p>

        {/* Products + Rating (Hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-4">
          <p>155 Products</p>
          <span>|</span>
          <div className="flex items-center gap-1">
            <p className="text-[#2BAC17]">★ 4.5</p>
            <p>reviews</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start overflow-x-scroll md:overflow-hidden">
        <div className="flex gap-6 justify-center mb-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="sm:w-40 rounded-full max-w-[100px]"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="sm:w-40 rounded-full max-w-[100px]"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="sm:w-40 rounded-full max-w-[100px]"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="sm:w-40 rounded-full max-w-[100px]"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="sm:w-40 rounded-full max-w-[100px]"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E7E7E7] rounded-lg px-3 py-2 flex items-center justify-between">
        {/* Left Text */}
        <p className="text-xs sm:text-sm text-black">Showing 12 Results...</p>

        {/* Right Sort By */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/sort.svg" className="w-4 sm:w-5" />
          <span className="text-xs sm:text-sm text-black">Sort By</span>
        </div>
      </div>

      {/* one */}
      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img
              src="/images/room decor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/cardecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/livingroomdecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/bdaydecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
        </div>
      </div>
      {/* two */}
      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img
              src="/images/21bday.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/colorballon.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-11">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/topdecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/roomdecors.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
        </div>
      </div>
      {/* three */}
      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img
              src="/images/babyshower.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/topseller.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/ballons.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
          <div>
            <img
              src="/images/bossday.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
              Shinny Birthday decors
            </span>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">₹4399</span>
              <span className="text-gray-400 line-through text-sm">₹4499</span>
              <span className="text-green-500 text-xs">1% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
