"use client";
import Image from "next/image";
import React from "react";

export default function DreamJobHero() {
  return (
    <section
      className="
        w-full
     
        bg-[radial-gradient(circle_at_center,_#A1469E_0%,_#7B2A6F_100%)]
        text-white
        px-8
        py-8
        flex
        items-center
        justify-center
      "
    >
      {/* Centered container */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Find Your Dream Job<br />
            Today.
          </h1>
          <p className="text-gray-100 text-lg mb-6">
            Thousands of opportunities at your fingertips
          </p>
          <button
            className="
              bg-white 
              text-[#A1469E]
              px-6 
              py-3 
              rounded 
              font-semibold 
              hover:opacity-90
            "
          >
            Search Jobs
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="all-job.png"
            alt="Man working on laptop"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
