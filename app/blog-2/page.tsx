"use client";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div>
      <div className="container mx-auto px-4 py-12  bg-[#E6E6E6] md:bg-transparent">
        <div className="w-full bg-[#FFF7F8] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-[122px] gap:3">
            {/* LEFT SECTION */}
            <div className="flex flex-col gap-8 order-1 lg:order-2">
              {/* Category */}
              <p className="text-sm font-medium text-[#FC6E88] tracking-wider">
                BIRTHDAY DECORATION
              </p>

              {/* Heading */}
              <h1 className="text-[32px] sm:text-[40px] lg:text-[40px] font-medium leading-tight">
                Why Balloon Decoration Is The Heart of Every Celebrations
              </h1>

              {/* Button */}
              <button className="bg-[#FC6E88] text-white px-4 py-2 rounded-lg w-fit font-medium hover:bg-[#ff5474] transition">
                Explore Funtook today
              </button>

              {/* AUTHOR INFO */}
              <div className="flex items-center gap-4 mt-4">
                {/* Avatar */}
                <Image
                  src="/assets/home/card-girl.svg" // Replace with your image path
                  alt="Author"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between gap-3 text-sm text-[#585858] flex-wrap">
                <span className="font-medium">Ruhi Sinha</span>

                <span className="flex justify-between items-center gap-1">
                  <span className="w-2 h-2 bg-[#585858] rounded-full"></span>
                  Senior Mentor|Decorations Specialist
                </span>

                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#585858] rounded-full"></span>
                  September 7, 2025
                </span>
              </div>
            </div>

            {/* RIGHT SECTION - IMAGE CARD */}
            <div className="bg-white rounded-[30px] d p-0 overflow-hidden order-2 lg:order-1">
              <Image
                src="/assets/home/card-img.svg" // Replace with your blog card image
                alt="Blog Banner"
                width={700}
                height={450}
                className="w-full h-auto rounded-[30px]"
              />
            </div>
          </div>
        </div>
        <h2 className="text-[22px] font-medium mb-4">Table of Contents</h2>

        {/* <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 mb-[38px]">

          <aside className="w-64 p-6 bg-[#FFF0F4] shadow-md sticky top-0 h-[300px] overflow-y-auto">
            <ul className="space-y-2 text-gray-700">
              <li className="p-2 rounded bg-[#FFCDDB] cursor-pointer">
                Introduction
              </li>
              <li className="p-2 rounded cursor-pointer">
                The Emotional Impact of Balloons
              </li>
              <li className="p-2 rounded cursor-pointer">
                Versatility in Themes and Styles
              </li>
              <li className="p-2 rounded cursor-pointer">
                Budget-Friendly Decoration Option
              </li>
              <li className="p-2 rounded cursor-pointer">Customization</li>
            </ul>
          </aside>

          <main className="flex-1 p-8 space-y-16">

            <section id="introduction" className="space-y-4">
              <h1 className="text-2xl font-bold">Introduction</h1>
              <div className="w-full max-w-3xl">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift energy
                  and mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> For birthdays, weddings,
                  and more.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  experiences.
                </li>
              </ul>
            </section>

            <section id="emotional-impact" className="space-y-4">
              <h2 className="text-2xl font-bold">
                The Emotional Impact of Balloons
              </h2>
              <div className="w-full max-w-3xl">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Balloons Impact"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Balloons instantly evoke happiness and excitement. Their colors
                and shapes stimulate positive emotions, making any space feel
                lively and welcoming. They bring a sense of celebration that
                connects people and enhances the overall event experience.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Color Psychology:</strong> Bright colors uplift mood
                  and create joy.
                </li>
                <li>
                  <strong>Childlike Wonder:</strong> Balloons encourage fun,
                  play, and playfulness.
                </li>
                <li>
                  <strong>Shared Happiness:</strong> They encourage smiles,
                  photos, and togetherness.
                </li>
              </ul>
            </section>

            <section id="Versatility" className="space-y-4">
              <h1 className="text-2xl font-bold">
                Versatility in Themes and Styles
              </h1>
              <div className="w-full max-w-3xl">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift energy
                  and mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> For birthdays, weddings,
                  and more.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  experiences.
                </li>
              </ul>
            </section>

            <section id="Budget-Friendly" className="space-y-4">
              <h1 className="text-2xl font-bold">
                Budget-Friendly Decoration Option
              </h1>
              <div className="w-full max-w-3xl">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift energy
                  and mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> For birthdays, weddings,
                  and more.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  experiences.
                </li>
              </ul>
            </section>
          </main>
        </div> */}

        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 mb-[38px]">
          <aside
            className="
      w-full md:w-64 
      p-6 bg-[#FFF0F4] shadow-md 
      sticky md:top-0 
      max-h-[250px] md:h-screen 
      overflow-y-auto
  "
          >
            <ul className="space-y-2 text-gray-700">
              <li className="p-2 rounded bg-[#FFCDDB] cursor-pointer">
                Introduction
              </li>
              <li className="p-2 rounded cursor-pointer">
                The Emotional Impact of Balloons
              </li>
              <li className="p-2 rounded cursor-pointer">
                Versatility in Themes and Styles
              </li>
              <li className="p-2 rounded cursor-pointer">
                Budget-Friendly Decoration Option
              </li>
              <li className="p-2 rounded cursor-pointer">Customization</li>
            </ul>
          </aside>

          <main className="flex-1 p-4 sm:p-8 space-y-16">
            <section id="introduction" className="space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold">Introduction</h1>

              <div className="">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> Works for all events.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  scenes.
                </li>
              </ul>
            </section>

            <section id="emotional-impact" className="space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold">Introduction</h1>

              <div className="">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> Works for all events.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  scenes.
                </li>
              </ul>
            </section>

            <section id="Versatility" className="space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold">Introduction</h1>

              <div className="">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> Works for all events.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  scenes.
                </li>
              </ul>
            </section>

            <section id="Budget-Friendly" className="space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold">Introduction</h1>

              <div className="">
                <Image
                  src="/assets/home/cake-girl.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <p className="text-gray-700">
                Balloon decoration is the heart of celebrations because it
                brings color, joy, and a warm welcoming vibe to any event.
                Balloons instantly transform spaces and evoke positive emotions
                for guests. They play full shapes, vibrant palettes, and
                extraordinary artistic designs that engage and amaze everyone!
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Joyful Atmosphere:</strong> Bright colors lift mood.
                </li>
                <li>
                  <strong>Versatile Themes:</strong> Works for all events.
                </li>
                <li>
                  <strong>Memorable Moments:</strong> Creates photo-worthy
                  scenes.
                </li>
              </ul>
            </section>
          </main>
        </div>

        <div>
          <h2 className="text-4xl font-bold my-5">Related Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="px-5 py-8 border-2 md:border border-[#CBCBCB] bg-white md:bg-transparent">
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
                <p className="text-sm font-bold">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border-2 md:border border-[#CBCBCB] bg-white md:bg-transparent">
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
                <p className="text-sm font-bold">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
            <div className="px-5 py-8 border-2 md:border border-[#CBCBCB] bg-white md:bg-transparent">
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
                <p className="text-sm font-bold">Ruhi Sinha</p>
                <p className="text-sm font-normal">
                  Senior Mentor | Decorations Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-[#B189A3] text-center py-20 px-4 sm:py-32 sm:px-6 md:py-40 md:px-10 md:mt-[35px] mt-0">
          <h2 className="font-medium text-[20px] sm:text-4xl md:text-5xl lg:text-6xl">
            <span
              className="
      bg-white rounded-full py-1 sm:py-2.5 
      px-3 sm:px-6 md:px-8 
      inline-block
    "
            >
              Maximize Productivity by 30%
            </span>{" "}
            <span className="text-white max-w-[135px] block mx-auto sm:max-w-full sm:inline ">
              with FUNTOOK
            </span>
          </h2>

          <button className="bg-[linear-gradient(90deg,rgba(252,110,136,1)_53%,rgba(255,6,6,1)_87%)] mt-6 sm:mt-10 px-4 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-medium text-white">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
