"use client";
import React from "react";

export default function JobSearchHero() {
  return (
    <section
      className="
        w-full 
        min-h-screen 
        bg-[radial-gradient(circle_at_center,_#A1469E_0%,_#7B2A6F_100%)]
        flex
        items-center
        justify-center
        px-4
        py-12
        text-white
      "
    >
      <div className="max-w-4xl w-full text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s find the perfect job for you!
        </h1>

        {/* Subheading */}
        <p className="text-gray-100 text-lg md:text-xl mb-8">
          Any industry. Anywhere. Any experience.
        </p>

        {/* Search Inputs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          {/* Keywords */}
          <div className="border border-white rounded-full px-4 py-2 flex items-center">
            <span className="mr-2">🔍</span>
            <span>Keywords</span>
          </div>

          {/* Location */}
          <div className="border border-white rounded-full px-4 py-2 flex items-center">
            <span className="mr-2">📍</span>
            <span>Location</span>
            <button className="ml-2 text-white">&times;</button>
          </div>

          {/* Distance */}
          <div className="border border-white rounded-full px-4 py-2 flex items-center">
            
            <span className="mr-2">⚙️</span>
            <span>Distance</span>
            {/* A simple arrow or dropdown icon */}
            <span className="ml-2">▼</span>
          </div>
        </div>

        {/* Search Button */}
        <button
          className="
            bg-white
            text-[#A1469E]
            font-semibold
            px-6
            py-3
            rounded
            hover:bg-gray-200
            hovering-120 [#A1469E]
          "
        >
          Search Job
        </button>

        {/* "No Jobs Found" Message */}
        <p className="text-gray-100 mt-8 text-sm md:text-base">
          No jobs found. Check out these popular search terms or try again.
        </p>
      </div>
    </section>
  );
}
