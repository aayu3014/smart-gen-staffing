import React from "react";

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
            At Smart Gen Staffing, we understand the importance of finding the
            right fit between employers and job seekers. Our experienced team
            works tirelessly to match qualified candidates with rewarding career
            opportunities, tailored to their unique skills and aspirations
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
          <img
            src="/hero1.png"
            alt="Professional with tablet"
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 items-center mt-16">
        <div className="relative h-full order-2 md:order-1">
          <div className="bg-[#FDF1F1] absolute top-0 left-0 w-[90%] h-full rounded-r-full" />
          <img
            src="/hero2.png"
            alt="Professional working on laptop"
            className="relative z-10 w-full h-full object-cover"
          />
        </div>
        {/* Update just this part in the services section */}
        <div className="px-6 md:px-12 lg:px-16 py-12 order-1 md:order-2">
          <h3 className="text-[#9B4B9C] text-xl mb-2">Our Services</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering Your Workforce with Smart Gen Staffing
          </h2>
          <p className="text-gray-600 mb-8">
            Smart Gen Staffing is a leading provider of workforce solutions,
            delivering exceptional talent and innovative strategies to companies
            across a wide range of industries
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
