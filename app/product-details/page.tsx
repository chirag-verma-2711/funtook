import Image from "next/image";
import ProductDetails from "../components/product-details/ProductDetails";
import ProductZoom from "../components/ProductZoom/productzoom";
import { HiCode } from "react-icons/hi";

export default function Products() {
  return (
    <div className="w-full container mx-auto px-2 py-4 md:px-4 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left */}
        <div className="flex flex-col items-center">
          <ProductZoom />
        </div>

        {/* Right */}
        <div className="px-3 py-3">
          <div className="border rounded border-[#FFDDDD] bg-(--pinkl) px-2 w-fit text-sm">
            <p className="flex gap-2 text-[#FF6A9E]">
              <img src="/images/game.svg" />
              #1 Decoration website in India
            </p>
          </div>

          {/* Responsive Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
            Colorful Balloon Decoration
          </h2>

          {/* Price Section */}
          <div className="flex items-center gap-2 text-2xl sm:text-3xl mt-4">
            <span className="font-bold">₹4399</span>
            <span className="text-gray-400 line-through text-sm">₹4499</span>
            <span className="text-green-500 border rounded-2xl p-1 text-xs bg-linear-to-r from-[#93F8C5] to-[#ffffff]">
              1% OFF
            </span>
          </div>

          <span className="text-gray-400 text-sm">Including all charges</span>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            <span className="text-yellow-400 text-xl sm:text-2xl md:text-3xl">
              ★ ★ ★ ★ ★
            </span>
            <span className="text-[#616161]">(4.8)|</span>
            <span className="text-[#566AFF]">170 reviews</span>
          </div>

          {/* Similar products shortcut */}
          <div className="flex items-center gap-1 mb-1">
            <span className="bg-[#CFCFCF] text-[14px] p-2 rounded">
              Similar products →
            </span>
          </div>

          <ProductDetails />

          {/* Offer Box */}
          <div className="mt-10 border border-[#E7E7E7] rounded-3xl">
            <div className="bg-[#FBEFCE] p-4 flex justify-between rounded-tl-[20px] rounded-tr-[20px]">
              <div className="flex gap-2">
                <img className="w-5" src="/images/discount.png" />
                <p className="text-[14px]">
                  Get <strong>Rs 100</strong> Off – Only on Website Bookings
                </p>
              </div>

              <p className="text-(--pinkd) font-bold text-[14px]">
                CODE: WELCOME
              </p>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                {/* WhatsApp */}
                <button className="flex items-center gap-2 bg-white text-[#25BF31] border-[#25BF31] border-2 px-5 py-2 rounded shadow w-full sm:w-auto">
                  <img src="/images/logos_whatsapp-icon.svg" />
                  Whatsapp
                </button>

                {/* Call Button */}
                <button className="flex items-center gap-2 bg-(--pinkd) text-white px-5 py-2 rounded shadow w-full sm:w-auto">
                  Book your order →
                </button>
              </div>
            </div>
          </div>

          {/* Trusted Box */}
          <div className="mt-10 space-y-10">
            <div className="border border-[#B8B8B8] bg-[#FCFCFC] rounded-2xl text-center space-y-3 shadow-sm p-4">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 m-0 mt-4">
                India’s Most Trusted
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#FC6E88]">
                Funtook Decors
              </h1>

              <div className="flex flex-wrap justify-center gap-4 text-[14px] mt-3">
                <span className="flex items-center gap-2">
                  <span className="text-green-500">🍃</span> Customized
                  Decoration
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-500">🍃</span> Affordable Packages
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-500">🍃</span> Eco-Friendly
                  Materials
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-500">🍃</span> 24×7 Support
                </span>
              </div>

              <button className="bg-[#FFDFE5] px-5 py-2 rounded-bl-2xl rounded-br-2xl text-[15px] font-medium mt-4 w-full">
                Explore Our Recent Works →
              </button>
            </div>

            {/* Ratings Section */}
            <h2 className="text-center text-[22px] sm:text-[26px] font-semibold m-0 mb-4">
              Rating & Review
            </h2>

            <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left rating box */}
              <div className="bg-[#FCFCFC] space-y-4 flex flex-col items-center border-t-2 rounded-tl-lg rounded-bl-lg border-t-[#0FC908] p-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    4.3
                  </div>
                  <p className="text-[14px] font-medium mt-1">Average Rating</p>
                  <p className="text-gray-500 text-[13px]">
                    Based on 1200 ratings
                  </p>
                </div>

                {/* Bars */}
                <div className="w-full space-y-2">
                  {[90, 70, 50, 30, 15].map((w, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-[14px]"
                    >
                      <span className="w-14">{5 - i} star</span>
                      <div className="flex-1 bg-gray-200 h-3 rounded">
                        <div
                          className="bg-yellow-400 h-3 rounded"
                          style={{ width: `${w}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right reviews */}
              <div className="space-y-4 flex flex-col justify-between">
                {/* Review 1 */}
                <div className="flex gap-3 p-3 bg-[#FCFCFC] border-t-[#0FC908] border-t-2 rounded-tr-lg">
                  <img
                    src="https://i.pravatar.cc/60"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-[15px]">Riya Sharma</p>
                    <p className="text-yellow-500 text-[16px]">★★★★★</p>
                    <p className="text-[12px] text-gray-700">
                      Funtook made our celebration magical! Beautiful setup,
                      timely service, and amazing team. Highly recommended!
                    </p>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="flex gap-3 p-3 bg-[#FCFCFC]">
                  <img
                    src="https://i.pravatar.cc/61"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-[15px]">Riya Sharma</p>
                    <p className="text-yellow-500 text-[16px]">★★★★★</p>
                    <p className="text-[12px] text-gray-700">
                      Absolutely loved the setup! Every detail was perfect —
                      vibrant, elegant, and exactly as promised. Great work,
                      Funtook!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <input
              placeholder="Write a review…"
              className="w-full border border-green-300 rounded-lg p-3 outline-none"
            />
          </div>
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <div className="w-full px-4 py-3 flex items-center justify-between mt-4">
        <p className="text-lg font-bold text-gray-700">Similar products</p>

        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/left-line.svg" className="w-[26px]" />
          <img src="/images/right-line.svg" className="w-[26px]" />
        </div>
      </div>

      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-full md:min-w-[700px] flex w-full gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[150px]">
              <img
                src={`/images/room decor.svg`}
                className="w-full aspect-square object-cover rounded-lg mb-2"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1 block">
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
          ))}
        </div>
      </div>

      {/* OTHER CATEGORIES */}
      <div className="w-full px-4 py-3 flex items-center justify-between mt-4">
        <p className="text-lg font-bold text-gray-700">Other categories</p>

        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/left-line.svg" className="w-[26px]" />
          <img src="/images/right-line.svg" className="w-[26px]" />
        </div>
      </div>

      <div className="mt-4 overflow-x-scroll md:overflow-hidden">
        <div className="min-w-full md:min-w-[700px] flex w-full gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[150px]">
              <img
                src={`/images/room decor.svg`}
                className="w-full aspect-square object-cover rounded-lg mb-2"
              />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1 block">
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
          ))}
        </div>
      </div>
    </div>
  );
}
