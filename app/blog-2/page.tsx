"use client";
import Image from "next/image";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Phone } from "lucide-react";
import DeliveryDetails from "../components/DeliveryDetails";
import DeliveryForm from "../components/DeliveryForm";
import { useState } from "react";
import { X } from "lucide-react";

export default function NewsletterSection() {
  const [open, setOpen] = useState(true);
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

      {/* sign up  */}
      {/* <div className="flex items-center justify-center">
        <div className="relative w-full max-w-sm bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border-3 border-gray-500">
          
          <button className="absolute top-0 right-0 bg-[#701C5A] text-white rounded-tr-[13px] rounded-bl-[15px] w-10 h-10 flex items-center justify-center text-sm">
            ✕
          </button>

        
          <h2 className="text-center text-2xl font-semibold mb-6">Sign Up</h2>

         
          <div className="mb-4">
            <div className="flex items-center border-b pb-1 mt-1">
              <input
                type="text"
                className="w-full outline-none bg-transparent text-lg"
                placeholder="Name"
              />
              <HiUser className="text-gray-600 text-xl" />
            </div>
          </div>

          
          <div className="mb-4">
            <div className="flex items-center border-b pb-1 mt-1">
              <input
                type="email"
                className="w-full outline-none bg-transparent text-lg"
                placeholder="Email"
              />
              <HiMail className="text-gray-600 text-xl" />
            </div>
          </div>

        
          <div className="mb-4">
            <div className="flex items-center border-b pb-1 mt-1">
              <input
                type="password"
                className="w-full outline-none bg-transparent text-lg"
                placeholder="Password"
              />
              <HiLockClosed className="text-gray-600 text-xl" />
            </div>
          </div>

          
          <div className="flex items-center gap-1 mt-3">
            <input
              type="checkbox"
              className="w-4 h-4 appearance-none bg-[#AEAEAE] rounded"
            />
            <p className="text-sm text-gray-700">
              I agree to the terms & conditions
            </p>
          </div>

          
          <button className="w-full mt-6 bg-[#FC6E88] from-[#FF7CA3] to-[#FF5277] text-white py-1 rounded-lg font-semibold">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-700 mt-4">
            Already have an account?
            <a href="#" className="text-blue-600 ml-1 font-medium">
              Login
            </a>
          </p>
        </div>
      </div> */}

      {/* Login */}
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-sm bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border-3 border-gray-500">
          {/* Close Button */}
          <button className="absolute top-0 right-0 bg-[#701C5A] text-white rounded-tr-[13px] rounded-bl-[15px] w-10 h-10 flex items-center justify-center text-sm">
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>

          {/* Email Field */}
          <div className="mb-4">
            <div className="flex items-center border-b pb-1 mt-1">
              <input
                type="email"
                className="w-full outline-none bg-transparent text-lg"
                placeholder="Email"
              />
              <HiMail className="text-gray-600 text-xl" />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="flex items-center border-b pb-1 mt-1">
              <input
                type="password"
                className="w-full outline-none bg-transparent text-lg"
                placeholder="Password"
              />
              <HiLockClosed className="text-gray-600 text-xl" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            {/* Left side: Checkbox and label */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-300 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>

            {/* Right side: Forget Password */}
            <p className="text-sm text-blue-600 cursor-pointer hover:underline">
              Forget Password?
            </p>
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-[#FC6E88] from-[#FF7CA3] to-[#FF5277] text-white py-1 rounded-lg font-semibold">
            Login
          </button>

          <p className="text-center text-sm text-gray-700 mt-4">
            Don’t have an account?
            <a href="#" className="text-blue-600 ml-1 font-medium">
              Sign Up
            </a>
          </p>

          <p className="text-center text-sm text-gray-700 mt-4">
            By continuing I agree to Funtook
            <a href="#" className="text-blue-600 ml-1 font-medium">
              Term & condition
            </a>
            and
            <a href="#" className="text-blue-600 ml-1 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div>
        <DeliveryDetails />
      </div>
      <div>
        <DeliveryForm isOpen={open} onClose={() => setOpen(false)} />
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className=" w-full max-w-5xl rounded-2xl p-5 bg-pink-500 overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* LEFT SECTION */}
          <div className="w-full md:w-1/3  text-white p-6 space-y-6">
            {/* Brand section */}
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src="/assets/home/funtook-bg.svg"
                  alt="Introduction"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg">FUNTOOK</h2>
                <p className="text-sm opacity-80">Razorpay Trusted Business</p>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white text-black rounded-xl p-4">
              <p className="text-sm">Price Summary</p>
              <p className="text-2xl font-semibold mt-2">₹ 4,765</p>
            </div>

            <div className="bg-[#FFFFFF] text-black rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-black" />
                <p className="text-sm">Using as +916350607808</p>
              </div>

              <span className="text-2xl text-[#FC768E]">›</span>
            </div>

            {/* Offer */}
            <div className="text-black bg-[#ECFFE5] rounded-xl p-4 flex items-center justify-between">
              <p className="text-sm ml-5">Offer on UPI, AUBL & more</p>
              <span className="text-2xl">›</span>
            </div>
          </div>

          {/* RIGHT SECTION */}
          {/* <div className="w-full md:w-2/3 bg-white p-6 rounded-2xl relative">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className="grid grid-cols-1 gap-3">
              <div className="border rounded-xl p-4 flex justify-between items-center">
                <p className="font-medium">UPI</p>
                <span className="text-green-600 text-sm">3 Offers</span>
              </div>

              <div className="border rounded-xl p-4 flex justify-between items-center">
                <p className="font-medium">Cards</p>
                <span className="text-green-600 text-sm">
                  Up to 1.5% saving
                </span>
              </div>

              <div className="border rounded-xl p-4 flex justify-between items-center">
                <p className="font-medium">EMI</p>
                <span className="text-green-600 text-sm">2.5% Cashback</span>
              </div>

              <div className="border rounded-xl p-4 flex justify-between items-center">
                <p className="font-medium">Netbanking</p>
              </div>

              <div className="border rounded-xl p-4 flex justify-between items-center">
                <p className="font-medium">Wallet</p>
                <span className="text-green-600 text-sm">2.5% Cashback</span>
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold">UPI QR</h3>

            <div className="border rounded-xl p-4 mt-3 flex gap-4">
              <div className="w-[120px] h-[120px] bg-gray-200 rounded-lg"></div>

              <div className="flex flex-col justify-between">
                <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
                  Refresh QR
                </button>
                <p className="text-sm text-green-600">4 Offers</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              By proceeding, I agree to Razorpay’s Privacy Notice. Edit
              Preferences.
            </p>
          </div> */}

          <div className="w-full md:w-2/3 bg-white rounded-2xl relative">
            <h2 className="text-xl font-semibold py-6 m-0 text-center">
              Payment Method
            </h2>

            <div className="flex border-t border-gray-300">
              <div className="w-1/2 bg-[#FFE5EB] p-5 rounded-xl">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { title: "UPI", offer: "3 Offers" },
                    { title: "Cards", offer: "1.5% Saving" },
                    { title: "EMI", offer: "2.5% Cashback" },
                    { title: "Netbanking", offer: null },
                    { title: "Wallet", offer: "2.5% Cashback" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-lg">{item.title}</p>

                        {item.offer && (
                          <span className="text-green-600 text-sm bg-[#ECFFE5] px-[11px] py-1 rounded-[15px] block mt-1">
                            {item.offer}
                          </span>
                        )}
                      </div>

                      <div>
                        <Image
                          src="/assets/home/g-pay.svg"
                          alt={`${item.title} Icon`}
                          width={1000}
                          height={1000}
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/2 bg-gray-50 rounded-xl p-6">
                <div>
                  <h3 className="text-base font-medium">Available Offers</h3>
                </div>

                <div className="flex bg-[#FFCCD7] p-3 rounded-full">
                  <div>
                    <Image
                      src="/assets/home/win-up.svg"
                      alt="Introduction"
                      width={1000}
                      height={1000}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <p>Win up to Rs200 cashback view...</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">UPI QR</h3>
                <div className="mt-3 flex gap-3">
                  {/* QR Code */}
                  <div>
                    <Image
                      src="/assets/home/qrcode.svg"
                      alt="QR Code"
                      width={1000}
                      height={1000}
                      className="rounded-lg w-full h-full"
                    />
                  </div>

                  {/* Right Side Content */}
                  <div className="flex flex-col">
                    {/* Scan Instruction */}
                    <p className="text-sm">Scan the QR using any UPI App</p>

                    {/* UPI App Icons */}
                    <div className="flex items-center gap-2 mt-2">
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <Image
                            key={index}
                            src="/assets/home/phone-pay.svg"
                            alt="UPI Icon"
                            width={1000}
                            height={1000}
                            className="rounded-lg w-full h-full"
                          />
                        ))}
                    </div>

                    {/* Offers */}
                    <p className="bg-[#ECFFE5] w-fit text-sm text-green-600 mt-2">
                      4 Offers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFEBEE] rounded-b-2xl mt-6">
              <p className="text-center py-4 font-medium text-base">
                By proceeding, I agree to Razorpay’s Privacy Notice. Edit
                Preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-white">
        {/* Modal Box */}
        <div className="w-[350px] bg-linear-to-b from-[#E6FFE6] to-[#F4FFF4] shadow-lg rounded-xl p-6 relative">
          {/* Close Icon */}
          <button className="absolute right-4 top-4 text-gray-600 hover:text-black">
            <X size={20} />
          </button>

          {/* Check Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 shadow-lg">
              <span className="text-white text-3xl">✔</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold mt-4">
            Payment Successful
          </h2>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-sm mt-2">
            Your payment has been successfully processed. Now you can go to the
            homepage & discover new products.
          </p>

          {/* Button */}
          <div className="flex justify-center mt-5">
            <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
