"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

export default function CandidateSearch() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side: Candidate Images */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          <div className="flex items-center gap-3">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <Image src="/images/candidate1.jpg" alt="Candidate 1" width={128} height={128} className="object-cover" />
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-[#F4A261] shadow-lg overflow-hidden">
              <Image src="/images/candidate2.jpg" alt="Candidate 2" width={96} height={96} className="object-cover" />
            </div>
            <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <Image src="/images/candidate3.jpg" alt="Candidate 3" width={80} height={80} className="object-cover" />
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <Image src="/images/candidate4.jpg" alt="Candidate 4" width={64} height={64} className="object-cover" />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
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
