import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function viewall() {
  return (
    <div className="w-full container mx-auto px-2 py-4 md:px-4 md:py-10">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-4 mb-5">
          <p className="text-left text-2xl md:text-3xl font-semibold bg-black bg-clip-text text-transparent ">
            Birthday Decoration
          </p>
          <p>155 Products</p>
          <div className="flex gap-[5px]">
            <p className="text-[#2BAC17]">★ 4.5</p>
            <p>reviews</p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto justify-center mb-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="w-30 rounded-full"
            />
            <span className="text-sm  md:mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="w-30 rounded-full"
            />
            <span className="text-sm  md:mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="w-30 rounded-full"
            />
            <span className="text-sm  md:mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="w-30 rounded-full"
            />
            <span className="text-sm  md:mt-2">Kids Birthday</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/images/Ellipse 35.svg"
              className="w-30 rounded-full"
            />
            <span className="text-sm  lg:mt-2">Kids Birthday</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F5F5] rounded-lg px-4 py-3 flex items-center justify-between">
        {/* Left Text */}
        <p className="text-sm text-gray-700">Showing 12 Results...</p>

        {/* Right Sort By */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/sort.svg" />
          <span className="text-sm text-gray-700">Sort By</span>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5"> */}
      {/* card-1 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
          <img
            src="/images/room decor.svg"
            className="w-full aspect-square object-cover rounded-lg mb-2"
          />
          <span  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
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
        </div> */}
      {/* card-2 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-3 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-4 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-5 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-6 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-7 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-8 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-9 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-10 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-11 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* card-12 */}
      {/* <div className="flex flex-col bg-white rounded-lg shadow p-3">
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
        </div> */}
      {/* </div> */}
    </div>
  );
}
