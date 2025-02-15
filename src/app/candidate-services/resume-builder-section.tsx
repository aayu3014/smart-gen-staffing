'use client';
import React from 'react';

export default function ResumeBuilderSection() {
  return (
    <section
      className="
        w-full 
        bg-white          /* White background instead of gradient */
        flex 
        items-center 
        justify-center 
        px-8 
        py-16
      "
    >
      {/* Same container width as your EnchanceResume section */}
      <div className="max-w-4xl w-full text-gray-800">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: placeholder or image */}
          <div className="md:w-1/2 w-full h-64 rounded bg-gray-300" />
          {/* 
            Replace above <div> with an <img> if needed:
            <img 
              src="/path/to/your.png" 
              alt="Resume Builder" 
              className="md:w-1/2 w-full h-auto rounded"
            />
          */}

          {/* Right side: heading and paragraph */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-[#A1469E] mb-4">
              Resume Builder
            </h2>
            <p className="text-lg leading-relaxed">
              Create a professional and compelling resume that showcases
              your skills and experiences. Our user-friendly builder
              guides you through the process, ensuring your resume stands out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
