// app/page.tsx (or blog/page.tsx if inside a folder)
"use client";
import Image from "next/image";
import CategoriesList from "../components/CategoriesList";
import SocialIcons from "../components/SocialIcons";

export default function NewsletterSection() {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <div>
        <h2>Home Blog</h2>
      </div>

      <div className="relative px-6 py-10 md:px-8 md:py-16 bg-[#3F102E] flex flex-col md:flex-row gap-10 md:gap-5">
        {/* LEFT TEXT SECTION */}
        <div className="text-white md:w-1/2 text-3xl md:text-6xl font-semibold leading-tight md:leading-[75px] max-w-[690px]">
          Balloons do more than decorate — they create emotion, excitement, and
          togetherness.
        </div>

        {/* RIGHT NEWSLETTER BOX */}
        <div
          className="
      bg-[#FEDAEB] rounded-3xl p-8 w-full md:w-1/3
      md:absolute md:right-6 
      md:top-1/2 md:-translate-y-[30%]
    "
        >
          <h2 className="font-semibold text-2xl mb-2">
            Stay Updated With Our Newsletter
          </h2>
          <p className="text-sm font-normal mb-4">
            Get monthly updates on productivity hacks, time management tips, new
            features, and industry insights
          </p>

          <form className="flex flex-col gap-2 mt-6">
            <label className="text-sm font-medium">Full Name</label>
            <input type="text" className="bg-white border border-black p-2" />

            <label className="text-sm font-medium mt-2">Email ID*</label>
            <input
              type="email"
              required
              className="bg-white border border-black p-2"
            />

            <button
              type="submit"
              className="bg-[#FC6E88] text-white m-auto mt-4 py-2 px-6 rounded hover:bg-pink-500 transition"
            >
              Submit
            </button>

            <p className="m-auto text-sm font-semibold mt-4 text-gray-700">
              We promise, we don’t spam.{" "}
              <span className="text-pink-500 underline">Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>

      <div className="mt-[140px] grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT - 8 columns */}
        <div className="lg:col-span-8">
          <h2 className="mb-2 mt-4 text-4xl font-bold ">Recent Posts</h2>

          <div className="border my-6"></div>

          <div className="grid grid-cols-2 gap-5">
            <div className="px-5 py-8 border border-[#CBCBCB] ml-5">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB]">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB] ml-5">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB]">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB] ml-5">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB]">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB] ml-5">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border border-[#CBCBCB]">
              <Image
                src="/assets/home/card-img.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="text-xs font-medium bg-[#C8E1FF] w-fit px-3 rounded my-2">
                Birth Decoration
              </div>
              <p className="text-lg font-medium">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </p>
              <p className="text-sm font-normal">
                Balloon decoration brings instant joy, color, and life to any
                event. Whether it’s a birthday...
              </p>
              <div className="mt-2">
                <Image
                  src="/assets/home/card-girl.svg"
                  alt="card-img"
                  width={50}
                  height={50}
                />
                <p className="text-sm font-medium">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - 4 columns */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <CategoriesList />
          </div>
          <div>
            <div className="border border-black"></div>
            <SocialIcons />
            {/* <div className="relative mt-8">
              <Image
                src="/assets/home/birthday.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
              <div className="bg-[#0000009E] text-center absolute top-0 py-[100px] px-[26px] w-full h-full rounded-3xl">
                <h2 className="text-4xl font-medium text-white">
                  Master Time, Boost Decoration, Achieve More
                </h2>
                <button className="bg-[linear-gradient(90deg,rgba(252,110,136,1)_53%,rgba(255,6,6,1)_87%)] mt-8 px-5 py-2 rounded-xl text-sm font-medium text-white">
                  Try Funtook Now
                </button>
              </div>
            </div> */}

            <div className="relative mt-8">
              <Image
                src="/assets/home/birthday.svg"
                alt="card-img"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />

              {/* Overlay */}
              <div className="absolute top-0 w-full h-full rounded-3xl bg-[#0000009E] flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:px-10 md:py-32 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                  Master Time, Boost Decoration, Achieve More
                </h2>

                <button className="mt-6 sm:mt-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium text-white bg-[linear-gradient(90deg,rgba(252,110,136,1)_53%,rgba(255,6,6,1)_87%)]">
                  Try Funtook Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#B189A3] text-center py-[100px] px-0 mt-[100]">
        <h2 className="text-5xl font-medium"><span className="bg-white rounded-full py-2.5 px-[30px]">
          Maximize Productivity by 30%</span> with FUNTOOK
        </h2>
        <button className="bg-[linear-gradient(90deg,rgba(252,110,136,1)_53%,rgba(255,6,6,1)_87%)] mt-10 px-5 py-2 rounded-xl text-sm font-medium text-white ">
          Get Started
        </button>
      </div> */}

      <div className="bg-[#B189A3] text-center py-20 px-4 sm:py-32 sm:px-6 md:py-40 md:px-10 mt-[100]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          <span className="bg-white rounded-full py-1.5 sm:py-2.5 px-4 sm:px-8 md:px-[30px]">
            Maximize Productivity by 30%
          </span>{" "}
          with FUNTOOK
        </h2>

        <button className="bg-[linear-gradient(90deg,rgba(252,110,136,1)_53%,rgba(255,6,6,1)_87%)] mt-6 sm:mt-10 px-4 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-medium text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
