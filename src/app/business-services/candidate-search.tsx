"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

export default function CandidateSearch() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-x-8">
        
        {/* Left Side: Image */}
<div>
            <Image
            src="/b2.png" // ✅ Corrected Path
            alt="Candidate Group"
            width={783}
            height={372}
            className="object-contain"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A1469E]">
            Find your ideal candidate
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            Our advanced search and matching algorithms ensure you can efficiently find 
            the right candidate for your job openings.
          </p>
        </div>
      </div>
    </section>
  );
}
