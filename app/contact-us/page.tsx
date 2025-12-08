import Image from "next/image";

export default function contactus() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* FLEX PARENT */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT FORM */}
        <div className="md:w-1/2 w-full  p-8 rounded-xl shadow bg-[#F5F5F5]">
          <h3 className=" text-sm font-medium text-[#FC6E88]">Get In Touch</h3>
          <h1 className="text-2xl font-semibold mt-2">
            Let’s Chat, Reach Out to Us...
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Have questions or feedback? We’re here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div>
              <p>First Name</p>
              <input
                type="text"
                placeholder="First Name"
                className=" p-3 rounded-md w-full outline-none bg-[#EDEDED]"
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                className=" p-3 rounded-md w-full outline-none bg-[#EDEDED]"
              />
            </div>
          </div>
          <p className="mt-3">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md w-full outline-none bg-[#EDEDED]"
          />
          <p className="mt-3">Message</p>
          <textarea
            placeholder="Leave Message..."
            className="p-3 rounded-md w-full h-32 outline-none bg-[#EDEDED]"
          ></textarea>

          <label className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" className="w-4 h-4" />I agree to privacy
            policy
          </label>
          <div className="flex justify-center mt-10">
            <button className="mt-4  text-white px-6 py-2 rounded-md bg-[#FC6E88]">
              Submit
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE + CARDS */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          {/* IMAGE SECTION */}
          <div className="rounded-xl p-4 flex justify-center items-center">
            <img src="/images/image.svg" className="rounded-xl" />
          </div>

          {/* CONTACT CARDS */}
          <div
            className=" p-6 rounded-xl shadow flex flex-col gap-4"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#EDEDED]">
              <div className="p-3 rounded-full bg-[#E8D1D5]">
                <img src="/images/iconamoon_email-light.svg" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">info@turntoobix.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#EDEDED]">
              <div className=" p-3 rounded-full bg-[#E8D1D5]">
                <img src="/images/Vector (1).svg" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600">+91 9506xxx307</p>
              </div>
            </div>

            <div className="flex items-center gap-4  p-4 rounded-lg bg-[#EDEDED]">
              <div className=" p-3 rounded-full bg-[#E8D1D5]">
                <img src="/images/ph_address-book.svg" />
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-600">Patna, Bihar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
