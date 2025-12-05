"use client";

export default function Explore() {
  return (
    <div className="container mx-auto pb-15 px-5">
      <div className="text-center mb-15 headings_border">
        <h2 className="font-bold text-[34px]">Explore</h2>
        <p className="text-[18px] text-(--subhead)">Wide Range Of Options</p>
      </div>
      <div className="overflow-x-scroll md:overflow-hidden">
        <div className="min-w-[700px] flex w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
          <div>
            <img src="/assets/home/explore/aniversary_deco.jpg" alt="aniversary_deco" />
            <p>Anniversary Decoration</p>
          </div>
          <div>
            <img src="/assets/home/explore/birthday_deco.jpg" alt="birthday_deco" />
            <p>Birthday Decoration</p>
          </div>
          <div>
            <img src="/assets/home/explore/shower_deco.jpg" alt="shower_deco" />
            <p>Baby Shower</p>
          </div>
          <div>
            <img src="/assets/home/explore/kids_deco.jpg" alt="kids_deco" />
            <p>Kids Decoration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
