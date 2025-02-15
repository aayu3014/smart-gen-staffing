'use client';
import React from 'react';

export default function InterviewSection() {
  return (
    <section
      className="
        w-full
        bg-white
        flex
        items-center
        justify-center
        px-8
        py-16
      "
    >
      {/* Use the same container width so it aligns with the section above */}
      <div className="max-w-4xl w-full text-gray-800">
        {/* Two-column layout inside */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column (Text & Button) */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-20xl font-bold text-[#A1469E] mb-4">
              ACE YOUR INTERVIEW
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Prepare thoroughly, perform confidently,<br className="hidden md:block" />
              and progress successfully
            </p>
            <button className="bg-[#A1469E] text-white font-semibold px-6 py-3 rounded shadow hover:bg-purple-600">
              Interview Preparation
            </button>
          </div>

          {/* Right Column (Image) */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/interview-illustration.png" /* Example path */
              alt="Two people in an interview"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
