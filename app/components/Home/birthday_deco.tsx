"use client";

import Link from "next/link";
import Faqs from "../faqs/Faqs";
import ImageSlider from "../imageslider/ImageSlider";

export default function BirthdayDeco() {
  return (
    <div className="mx-auto">
      {/* <div className="text-center mb-15 headings_border">
        <h2 className="font-bold text-[34px]">Explore</h2>
        <p className="text-[18px] text-(--subhead)">Wide Range Of Options</p>
      </div> */}
    
      <div className="container mx-auto p-4">
        <div className=" flex justify-between items-center mb-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[27px] font-semibold">
            Birthday Decoration
          </h3>
          <Link
            href="#"
            className="text-(--pinkd) underline text-[12px] sm:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden">
          <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
            <div>
              <img
                src="/assets/home/birthday_deco/1.jpg"
                alt="aniversary_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/home/birthday_deco/2.jpg" alt="birthday_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2199</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/home/birthday_deco/3.jpg" alt="shower_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹1999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹2999
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/home/birthday_deco/4.jpg" alt="kids_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹8499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 container mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[27px] font-semibold">
            Anniversary Decoration
          </h3>
          <Link
            href="#"
            className="text-(--pinkd) underline text-[12px] sm:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden">
          <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
            <div>
              <img src="/images/anniversardecor1.svg" alt="aniversary_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/images/anniversardecor2.svg" alt="birthday_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2199</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/images/anniversardecor3.svg" alt="kids_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹1999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹2999
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/images/anniversardecor4.svg" alt="shower_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 container mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[27px] font-semibold">
            Surprising Loved Once Decoration
          </h3>
          <Link
            href="#"
            className="text-(--pinkd) underline text-[12px] sm:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden">
          <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
            <div>
              <img src="/images/surprise.svg" alt="aniversary_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/images/room decor.svg" alt="birthday_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/images/roomdecors.svg" alt="shower_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/images/21bday.svg" alt="kids_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-4 p-4 mt-10">
        {/* LEFT BIG IMAGE */}
        <div className=" hidden md:block col-span-12 md:col-span-6 relative h-[420px] md:h-[520px] rounded-tr-[40px] rounded-bl-2xl overflow-hidden">
          <span className="absolute top-3 left-4 text-3xl font-bold text-black z-10">
            The New Collections
          </span>
          <span className="absolute top-[45px] left-5 text-black z-10">
            From Haldi to Honeymoon!
          </span>

          <img
            src="/assets/sectionimages/bigimages.svg"
            className="w-full h-full object-cover"
          />

          <span className="absolute bottom-3 left-3 bg-[#B56BA6] text-white text-xs px-3 py-1 rounded-full">
            Pastel Unicorn Theme
          </span>
        </div>

        {/* RIGHT SCROLLER / GRID */}
        <div
          className="
      col-span-12 md:col-span-6
      flex md:grid
      md:grid-cols-12
      gap-3
      overflow-x-auto md:overflow-visible
      h-auto md:h-[520px]
      snap-x snap-mandatory
      scroll-smooth
    "
        >
          {/* CARD 1 */}
          <div className="min-w-[220px] md:min-w-0 h-[220px] md:h-[200px] md:col-span-4 relative rounded-xl overflow-hidden snap-start">
            <img
              src="/assets/sectionimages/thirdimg.png"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-[#B56BA6] text-white text-xs px-3 py-1 rounded-full">
              Kids Spider Theme
            </span>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[220px] md:min-w-0 h-[220px] md:h-[200px] md:col-span-4 relative rounded-xl overflow-hidden snap-start">
            <img
              src="/assets/sectionimages/secondimg.svg"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-[#B56BA6] text-white text-xs px-3 py-1 rounded-full">
              Baby Shark Theme
            </span>
          </div>

          {/* CARD 3 */}
          <div className="min-w-[220px] md:min-w-0 h-[220px] md:h-[200px] md:col-span-4 relative rounded-xl overflow-hidden snap-start">
            <img
              src="/assets/sectionimages/fourthimg.svg"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-[#B56BA6] text-white text-xs px-3 py-1 rounded-full">
              Unicorn Theme Kids Birthday
            </span>
          </div>

          {/* CARD 4 */}
          <div className="min-w-[280px] md:min-w-0 h-[220px] md:h-[300px] md:col-span-6 relative rounded-xl overflow-hidden snap-start">
            <img
              src="/assets/sectionimages/wide1.svg"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-[#B56BA6] text-white text-xs px-3 py-1 rounded-full">
              Royal Prince Theme
            </span>
          </div>

          {/* CARD 5 */}
          <div className="min-w-[280px] md:min-w-0 h-[220px] md:h-[300px] md:col-span-6 relative rounded-xl overflow-hidden snap-start">
            <img
              src="/assets/sectionimages/wide2.svg"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-[#B56BA6] text-white text-xs px-3 py-1 rounded-full">
              Pastel Unicorn Theme
            </span>
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="mt-[65px] container mx-auto p-4">
        <div className="text-center mb-15 headings_border">
          <h2 className="font-bold text-[26px] sm:text-[34px]">
            Kids Birthday Decorations
          </h2>
          <p className="text-[14px] sm:text-[18px] text-(--subhead)">
            Fun-Filled Themes for Every Celebration!
          </p>
        </div>
        <div className="flex flex-col items-center md:items-center overflow-x-scroll md:overflow-hidden">
          <div className="flex gap-6 justify-center mb-10">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/kids1.svg"
                className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
              />
              <span className="text-xs md:text-sm mt-2">
                Pastel Unicorn Theme
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/kids2.svg"
                className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
              />
              <span className="text-xs md:text-sm mt-2">Baby Shark Theme</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/kids3.svg"
                className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
              />
              <span className="text-xs md:text-sm mt-2">Kids Spider Theme</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/kids4.svg"
                className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
              />
              <span className="text-xs md:text-sm mt-2">
                Royal Prince Theme
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/kids5.svg"
                className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
              />
              <span className="text-xs md:text-sm mt-2">
                Ring Theme Kids Birth..
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src="/images/kids6.svg"
                className="max-w-[100px] sm:max-w-none sm:w-40 rounded-full"
              />
              <span className="text-xs md:text-sm mt-2">
                Home Birthday Arrang..
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section5 */}
      <div className="mt-10 container mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[27px] font-semibold">
            Welcome Baby Decoration
          </h3>
          <Link
            href="#"
            className="text-(--pinkd) underline text-[12px] sm:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden">
          <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
            <div>
              <img src="/images/babyshower.svg" alt="aniversary_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Welcome Baby Home
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/sectionimages/icecream.svg" alt="shower_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Welcome Backdrops Decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/sectionimages/bday.svg" alt="shower_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Welcome Decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/sectionimages/welcome.svg" alt="kids_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Girl Welcome Decoration
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹2999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 container mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[27px] font-semibold">
            Baby Shower Decoration
          </h3>
          <Link
            href="#"
            className="text-(--pinkd) underline text-[12px] sm:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden">
          <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
            <div>
              <img
                src="/assets/sectionimages/babyshower1.svg"
                alt="aniversary_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Shower Decor
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹1699</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img
                src="/assets/sectionimages/babyshower2.svg"
                alt="birthday_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Shower Ring Decor
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹1899</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img
                src="/assets/sectionimages/babyshower3.svg"
                alt="shower_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Shower Arc Decor
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹3999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img
                src="/assets/sectionimages/babyshower4.svg"
                alt="kids_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Baby Shower Decor
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹1999</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹3699
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 container mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[27px] font-semibold">
            Balloon Hampers
          </h3>
          <Link
            href="#"
            className="text-(--pinkd) underline text-[12px] sm:text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden">
          <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
            <div>
              <img
                src="/assets/sectionimages/ballon1.svg"
                alt="aniversary_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img
                src="/assets/sectionimages/ballon2.svg"
                alt="birthday_deco"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/sectionimages/ballon3.svg" alt="shower_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
            <div>
              <img src="/assets/sectionimages/ballon4.svg" alt="kids_deco" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                Shinny Birthday decors
              </span>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">₹4399</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹4499
                </span>
                <span className="text-green-500 text-xs">1% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section6 */}
      <div className="mt-16 container mx-auto p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <img
                src="/assets/sectionimages/truck.svg"
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-[12px] lg:text-lg leading-tight">
                  Free Shipping
                </p>
                <p className="text-[10px] lg:text-sm text-gray-600 leading-snug">
                  Free Shipping for All Orders
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <img
                src="/assets/sectionimages/contract-rounded.svg"
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-[12px] lg:text-lg leading-tight">
                  Money Guarantee
                </p>
                <p className="text-[10px] lg:text-sm text-gray-600 leading-snug">
                  Refund Within 30 Days
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3">
              <img
                src="/assets/sectionimages/support.svg"
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-[12px] lg:text-lg leading-tight">
                  Online Support
                </p>
                <p className="text-[10px] lg:text-sm text-gray-600 leading-snug">
                  24/7 Available for You
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3">
              <img
                src="/assets/sectionimages/payemnt.svg"
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-[12px] lg:text-lg leading-tight">
                  Flexible Payment
                </p>
                <p className="text-[10px] lg:text-sm text-gray-600 leading-snug">
                  Pay With Multiple Credit Cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section7 */}
      <div className="mt-18 container mx-auto p-4">
        <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-5 text-center md:text-left">
          Best Balloon Decoration Services in Patna — Affordable & Stunning
          Designs
        </h4>
        <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-left md:text-left">
          <li>
            In search of reasonably priced, superior balloon decorations in
            Patna? We at Funtook have been turning routine occasions into
            spectacular parties.
          </li>
          <li>
            From lovely birthday setups that start at just ₹1,299 to
            sophisticated wedding decorations and polished corporate events, our
            talented team specializes in creating stunning balloon arrangements
            for every occasion.
          </li>
          <li>
            We use high-quality materials and imaginative designs to make sure
            your party looks gorgeous without breaking the bank, unlike cheap
            decorators who sacrifice quality.
          </li>
          <li>
            Hundreds of local customers rely on our Patna-based professionals to
            provide dependable service with a personal touch for their special
            occasions, whether they require basic home décor or a complex venue
            makeover.
          </li>
        </ul>
      </div>
      <div className="mt-18 hidden md:block container mx-auto p-4">
        <h4 className="font-bold text-[28px] mb-5">
          Why Choose Funtook for Balloon Decoration in Patna?
        </h4>
        <ul className="space-y-3">
          <li>
            At Funtook, we love using imaginative balloon decorations to
            transform common areas into spectacular party spaces.
          </li>
          <li>
            Our skilled team, based in Patna, specializes in creating gorgeous
            balloon arrangements for corporate events, weddings, baby showers,
            and birthdays.
          </li>
          <li className="mb-5">
            What distinguishes us is our flawless balance of quality and
            affordability; we employ high-quality materials at reasonable costs.
          </li>
        </ul>
        <ul>
          <li>
            ✔ Affordable Pricing—Best prices compared to competitors (check our
            balloon decoration Patna price list below!)
          </li>
          <li>
            ✔ Same-Day Service—Last-minute bookings? We’ve got you covered!
          </li>
          <li>
            ✔ 500+ Happy Customers—Trusted by Patna residents for flawless decor
          </li>
          <li>
            ✔ Trendy & Custom Themes—From cartoon themes for kids to elegant
            wedding backdrops
          </li>
          <li>✔ Free Consultation—Get expert advice before booking</li>
        </ul>
      </div>
      <div className="mt-18 hidden md:block container mx-auto p-4">
        <h4 className="font-bold text-[28px] mb-5">
          Our Balloon Decoration Services in Patna
        </h4>
        <ul className="space-y-3">
          <h6 className="font-bold text-[20px] mb-5">
            1. Birthday Balloon Decoration in Patna
          </h6>
          <li>
            Nowadays, it’s very simple to plan a birthday balloon decoration in
            Patna! From straightforward, sophisticated setups to lavish, themed
            parties like superhero or princess extravaganzas, there is an
            amazing array of services available.
          </li>
          <li>
            The majority of decorators provide custom designs, creating gorgeous
            arches and backdrops with a variety of balloons, including metallic,
            chrome, and even character ones.
          </li>
          <li>
            There are options for every price range, so your celebration in
            Patna will be genuinely unique, whether you’re on a tight budget or
            want to go all out.
          </li>
        </ul>
        <ul className="space-y-3">
          <h6 className="font-bold text-[20px] mb-5 mt-5">
            2. Wedding Balloon Decorations Patna
          </h6>
          <li>
            We are skilled wedding decorators with a focus on creating magical
            balloon decorations. Our specialty is using custom balloon artistry
            to transform spaces, from large ballrooms to small garden settings.
          </li>
          <li>
            With a track record of realizing dream weddings all over India, you
            can rely on our staff to deliver gorgeous, customized décor.
          </li>
          <li>
            We are adept at crafting a sophisticated yet happy atmosphere,
            making sure that every installation—from delicate arches to large
            balloon walls—perfectly ties in with your wedding’s theme and color
            scheme.
          </li>
          <h4 className="font-bold text-[16px] mb-5">
            Want a dreamy wedding setup without spending a fortune? Our services
            include:a
          </h4>
          <ol className="space-y-2 list-disc ml-5">
            <li>Mandap & stage decoration with elegant balloon drapes</li>
            <li>Entrance arches & ceiling decor for a grand look</li>
            <li>Customized color themes (Gold, rose gold, pastel shades)</li>
          </ol>
        </ul>
        <ul className="space-y-3 ">
          <h6 className="font-bold text-[20px] mb-5 mt-5">
            3. Baby Shower & Gender Reveal Decor Patna
          </h6>
          <li>
            Our gender reveal and baby shower decorations are made to be
            genuinely unique, which is what it takes to celebrate the upcoming
            arrival of a child.
          </li>
          <li>
            Whether you have in mind a subtle pastel theme for a baby shower or
            a bold blue or pink reveal for a gender party, we are experts at
            designing imaginative and unforgettable arrangements.
          </li>
          <li>
            From gorgeous balloon arches and backdrops to elaborate
            centerpieces, we offer a wide range of services to make sure every
            element captures the excitement and expectation of your expanding
            family.
          </li>
          <li>
            You can rely on us to provide exquisite, customized décor that will
            make your celebration genuinely unique.
          </li>
          <h4 className="font-bold text-[16px] mb-5">
            Celebrate your little one’s arrival with adorable balloon setups,
            including:
          </h4>
          <ol className="space-y-2 list-disc ml-5">
            <li>Pink/blue balloon themes for gender reveals</li>
            <li>Balloon garlands & centerpieces</li>
            <li>Personalized name balloons</li>
          </ol>
        </ul>
        <ul className="space-y-3">
          <h6 className="font-bold text-[20px] mb-5 mt-5">
            4. Corporate & Office Event Decor Patna
          </h6>
          <li>
            For corporate and office event decor, we understand the importance
            of creating an environment that aligns with your brand identity and
            enhances the event’s purpose.
          </li>
          <li>
            Whether it’s a product launch, an annual gala, an employee
            appreciation day, or a festive office celebration, our expertise
            ensures a professional and impactful setting. We offer tailored
            decoration solutions, incorporating company colors, logos, and
            specific themes.
          </li>
          <li>
            From elegant balloon arrangements and backdrops for presentations to
            engaging photo booths and sophisticated lighting, our designs aim to
            impress clients, motivate employees, and create a memorable
            experience that reflects your company’s vision and values.
          </li>
          <h4 className="font-bold text-[16px] mb-5">
            Impress your guests with professional balloon decor for:
          </h4>
          <ol className="space-y-2 list-disc ml-5">
            <li>Product launches & grand openings</li>
            <li>Conference & seminar setups</li>
            <li>Festive office decorations (Diwali, Christmas, New Year)</li>
          </ol>
        </ul>
        <ul className="space-y-3">
          <h6 className="font-bold text-[20px] mb-5 mt-5">
            Areas We Serve in Patna
          </h6>

          <ol className="space-y-2">
            <h4 className="text-[16px] mb-5">
              We provide balloon decoration near you in all major areas,
              including:
            </h4>
            <li>✔ Kankarbagh</li>
            <li>✔ Anishabad</li>
            <li>✔ Danapur</li>
            <li>✔ Boring Road</li>
            <li>✔ Rajendra Nagar</li>
            <li>✔ Kadamkuan</li>
          </ol>
        </ul>
      </div>
      {/* section8-faqs */}
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h4 className="font-bold text-[28px] mt-8">
            Frequently Asked Questions
          </h4>
          <p>
            Find quick answers to common questions about balloon decorations
          </p>
          <Faqs />
        </div>
      </div>
      {/* section9 */}
      <div className="relative bg-[#380119] bg-[url('/assets/sectionimages/bg.svg')] bg-cover bg-center bg-no-repeat text-white p-6 sm:p-8 min-h-[280px] sm:min-h-[327px] flex items-center justify-center mt-10 sm:mt-20">
        <div className="flex flex-col items-center text-center relative z-10">
          <h5 className="text-2xl sm:text-4xl md:text-5xl mb-4">
            Are You Ready to Enhance your Decor in Happy Moments?
          </h5>

          <p className="text-sm sm:text-base max-w-[600px] mb-6 px-2">
            We help your decorations reach its growth. Book a call for 100%
            no-obligation and free suggestions to learn more about how we can
            assist you.
          </p>

          <button className="bg-(--pinkd) text-white px-5 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base">
            Book Your Decors
          </button>
        </div>
      </div>
    </div>
  );
}
