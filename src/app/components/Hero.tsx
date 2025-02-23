import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

const HeroSection = () => {
  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 items-center">
        <div className="px-6 md:px-12 lg:px-16 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Gen Staffing - Connecting Talent with Opportunity
          </h1>
          <p className="text-gray-600 mb-8 max-w-xl">
          At SmartGenStaffing, we’re here to be your trusted partner in growth. Your success is our mission, and we’re committed to supporting your journey every step of the way.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#9B4B9C] text-white px-8 py-3 rounded-lg">
              Find a Job
            </button>
            <button className="border border-[#9B4B9C] text-[#9B4B9C] px-8 py-3 rounded-lg">
              Post a Job
            </button>
          </div>
        </div>
        <div className="relative h-full">
          <div className="bg-[#F3EDF3] absolute top-0 right-0 w-[90%] h-full rounded-l-full" />
          <Image
            src="/hero1.png" // ✅ Ensure the image is inside the `public/` folder
            alt="Professional with tablet"
            width={500} // ✅ Set width
            height={500} // ✅ Set height
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 items-center mt-16">
        <div className="relative h-full order-2 md:order-1">
          <div className="bg-[#FDF1F1] absolute top-0 left-0 w-[90%] h-full rounded-r-full" />
          <Image
            src="/hero2.png" // ✅ Ensure the image is inside the `public/` folder
            alt="Professional working on laptop"
            width={500} // ✅ Set width
            height={500} // ✅ Set height
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
        {/* Services Section */}
        <div className="px-6 md:px-12 lg:px-16 py-12 order-1 md:order-2">
          <h3 className="text-[#9B4B9C] text-xl mb-2">Our Services</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering Your Workforce with Smart Gen Staffing
          </h2>
          <p className="text-gray-600 mb-8">
            Smart Gen Staffing is a leading provider of workforce solutions,
            delivering exceptional talent and innovative strategies to companies
            across a wide range of industries.
          </p>
          <button className="bg-[#9B4B9C] text-white px-6 py-2.5 rounded-md hover:bg-[#8A3F8B]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
