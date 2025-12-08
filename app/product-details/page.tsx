import Image from "next/image";

export default function Products() {
  return (
    <div className="w-full container mx-auto px-2 py-4 md:px-4 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left */}
        <div className="flex flex-col items-center">
          <div className="relative rounded overflow-hidden">
            <img src="/images/bigimage.svg" className="object-contain" />
          </div>
          <div className="mt-[26px] justify-center gap-10 flex">
            <div className="w-20 h-20 bg-gray-200 rounded">
              <img src="/images/smallimg.svg" className="object-contain" />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg border-2 border-red-500">
              <img src="/images/smallimg.svg" className="object-contain" />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded">
              <img src="/images/smallimg1.svg" className="object-contain" />
            </div>
            <div className="w-20 h-20 bg-gray-200 rounded">
              <img src="/images/smallimg2.svg" className="object-contain" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="border rounded border-[#FFDDDD] bg-(--pinkl) px-2 w-fit text-sm">
            <p className="flex gap-2 text-[#FF6A9E] ">
              <img src="/images/game.svg" />
              #1 Decoration website in India
            </p>
          </div>
          <h2 className="text-5xl mt-2">Colorful Balloon Decoration</h2>
          <div className="flex items-center gap-2 text-3xl mt-4">
            <span className="font-bold">₹4399</span>
            <span className="text-gray-400 line-through text-sm">₹4499</span>
            <span className="text-green-500  border rounded-2xl p-1 text-xs bg-linear-to-r from-[#93F8C5] to-[#ffffff]">
              1% OFF
            </span>
          </div>
          <span className="text-gray-400 text-sm">Including all charges</span>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-yellow-400 text-3xl">★ ★ ★ ★ ★</span>
            <span className="text-[#616161]">(4.8)|</span>
            <span className="text-[#566AFF]">170 reviews</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <span className="bg-[#CFCFCF] text-[14px] p-2 rounded">
              Similar products →
            </span>
          </div>
          <div className="mt-8 rounded">
            <div className="">About the Products</div>
            <div className="">FAQs</div>
            <div className="">Shipping</div>
            <div className="">Info</div>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-4 flex justify-between rounded-tr-[20px] rounded-tl-[20px]">
            <p>
              🎉 Get <strong>Rs 100</strong> Off – Only on Website Bookings
            </p>
            <p className="text-(--pinkd) font-bold">CODE: WELCOME</p>
          </div>
          <div className=" p-4 flex justify-center">
            <div className="flex items-center gap-4">
              {/* WhatsApp */}
              <button className="flex items-center gap-2 bg-white text-[#25BF31] border-[#25BF31] border-2 px-5 py-2 rounded shadow">
                <img src="/images/logos_whatsapp-icon.svg" />
                Whatsapp
              </button>

              {/* Call Button */}
              <button className="flex items-center gap-2 bg-(--pinkd) text-white px-5 py-2 rounded shadow">
                Book your order →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-3 flex items-center justify-between mt-4">
        {/* Left Text */}
        <p className="text-lg text-bold text-gray-700">Similar products</p>

        {/* Right Sort By */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/sort.svg" />
          <span className="text-sm text-gray-700"></span>
        </div>
      </div>
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
      <div className="w-full px-4 py-3 flex items-center justify-between mt-4">
        {/* Left Text */}
        <p className="text-lg text-bold text-gray-700">Other categories</p>

        {/* Right Sort By */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/sort.svg" />
          <span className="text-sm text-gray-700"></span>
        </div>
      </div>
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
    </div>
  );
}
