import Image from "next/image";

export default function recent() {
  return (
    <div className="w-full container mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-center text-5xl font-semibold bg-linear-to-r from-[#FB69A8] to-[#4E0606] bg-clip-text text-transparent mb-10">
        Our Recent Works
      </h2>
      <div className="flex gap-8 overflow-x-auto justify-center mb-10">
        <div className="flex flex-col items-center">
          <img src="/images/Group 42.svg" className="w-30 h-30 rounded-full" />
          <span>All</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Ellipse 35.svg"
            className="w-30 h-30 rounded-full"
          />
          <span>Kids Birthday</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Ellipse 35 (1).svg"
            className="w-30 h-30 rounded-full"
          />
          <span>Office Decoration</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Group 42 (1).svg"
            className="w-30 h-30 rounded-full"
          />
          <span>Anniversary</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Group 42 (2).svg"
            className="w-30 h-30 rounded-full"
          />
          <span>Baby Welcome</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/Ellipse 35 (1).svg"
            className="w-30 h-30 rounded-full"
          />
          <span>Office Decoration</span>
        </div>
      </div>
      {/* first section */}
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="row-span-2 relative aspect-square overflow-hidden">
          <Image
            src="/images/image1.svg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side (4-image grid) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image2.svg"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image3.svg"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image4.svg"
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image5.svg"
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className="w-full px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image6.png"
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image7.svg"
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image8.svg"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 4 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image9.svg"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="w-full px-4 py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image10.svg"
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image11.svg"
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image12.svg"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 4 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image13.svg"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Left column */}
        <img
          src="/images/image14.svg"
          alt="image"
          className="w-full aspect-square object-cover"
        />

        {/* BIG CENTER IMAGE */}
        <img
          src="/images/image15.svg"
          alt="big image"
          className="col-span-2 row-span-2 w-full h-full object-cover"
        />

        <img
          src="/images/image18.svg"
          alt="image"
          className="w-full aspect-square object-cover"
        />
        {/* Right column */}
        <img
          src="/images/image16.svg"
          alt="image"
          className="w-full aspect-square object-cover"
        />

        <img
          src="/images/image17.svg"
          alt="image"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* first section */}
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image19.svg"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image20.svg"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image21.svg"
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image22.svg"
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Right Side (4-image grid) */}
        <div className="row-span-2 relative aspect-square overflow-hidden">
          <Image
            src="/images/image23.svg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full px-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image10.svg"
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image11.svg"
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image12.svg"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 4 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image13.svg"
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-10">
        <div className="container mx-auto rounded-3xl border border-pink-300 bg-linear-to-r from-pink-50 to-pink-100 p-10 text-center shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-[#980A51]">
            Meet Your Decors
          </h2>
          <p className="text-gray-600 mt-1">Let&apos;s Beautify Together</p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {/* WhatsApp */}
            <button className="flex items-center gap-2 bg-[#25BF31] text-white px-5 py-2 rounded-lg shadow">
             <img src="/images/logos_whatsapp-icon.svg"/>
              Whatsapp Us
            </button>

            {/* Call Button */}
            <button className="flex items-center gap-2 bg-[#FC50A6] text-white px-5 py-2 rounded-lg shadow">
              <img src="/images/ic_baseline-phone.svg"/>
              Call Us
            </button>
          </div>

          {/* Features Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-gray-700">
            {[
              "Personalized Design",
              "Personalized Design",
              "Personalized Design",
              "Personalized Design",
              "Personalized Design",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>✅</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
