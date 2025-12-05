"use client";

import Link from "next/link";


export default function BirthdayDeco() {
  return (
    <div className="container mx-auto pb-15 px-5">
      {/* <div className="text-center mb-15 headings_border">
        <h2 className="font-bold text-[34px]">Explore</h2>
        <p className="text-[18px] text-(--subhead)">Wide Range Of Options</p>
      </div> */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[27px] font-semibold">Birthday Decoration</h3>
        <Link href="#" className="text-(--pinkd) underline">View All</Link>
      </div>
      <div className="overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img src="/assets/home/birthday_deco/1.jpg" alt="aniversary_deco" />
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
              />
            </svg>

            <p>Anniversary Decoration</p>
          </div>
          <div>
            <img src="/assets/home/birthday_deco/2.jpg" alt="birthday_deco" />
            <p>Birthday Decoration</p>
          </div>
          <div>
            <img src="/assets/home/birthday_deco/3.jpg" alt="shower_deco" />
            <p>Baby Shower</p>
          </div>
          <div>
            <img src="/assets/home/birthday_deco/4.jpg" alt="kids_deco" />
            <p>Kids Decoration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
