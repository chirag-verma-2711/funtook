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
        <div className="flex gap-6 sm:gap-[57px] justify-center mb-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
            />
            <span className="text-xs md:text-sm mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
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
        <div className="min-w-[700px] *:w-[25%] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img
              src="/images/room decor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/cardecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/livingroomdecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/bdaydecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* two */}
      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] flex *:w-[25%] w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img
              src="/images/21bday.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/colorballon.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/topdecor.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/roomdecors.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* three */}
      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] *:w-[25%] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img
              src="/images/babyshower.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/topseller.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/ballons.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/bossday.svg"
              className="w-full aspect-square object-cover rounded-lg mb-2"
            />
            <div className="px-2 py-4">
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-3">
                  Shinny Birthday decors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-[22px]">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span  className="border border-[#93F8C5] rounded-xl sm:rounded-2xl lg:rounded-[20px] px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-medium text-[#016136] bg-linear-to-r from-[#91F8C5] to-white inline-flex items-center justify-center whitespace-nowrap">
                  17% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
