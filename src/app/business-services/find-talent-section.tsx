"use client";
import React from "react";

export default function FindTalentSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We help businesses like yours discover and
            <br />
            connect with <span className="text-[#A1469E]">TOP-TIER TALENT.</span>
          </h2>
          <div className="mt-6">
            <button className="bg-[#A1469E] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#8B318A] transition duration-300">
              Find Your Team
            </button>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="aa.png" // Update this path
            alt="Talent Search Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
