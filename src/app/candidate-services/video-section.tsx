'use client';
import React from 'react';

export default function VideoSection() {
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
      {/* Match your container width so it aligns with the section above */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column: Heading, Paragraph, and Button */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A1469E] mb-4">
            We link young professionals with internships 
            <br className="hidden md:block" />
            and entry-level career opportunities.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Starting a career can be challenging, so we make it easy 
            and help ensure a smooth transition into the professional world.
          </p>

          {/* Watch Video Button */}
          <button
            className="
              inline-flex
              items-center
              border-2
              border-[#A1469E]
              text-[#A1469E]
              rounded-md
              px-4
              py-2
              font-semibold
              hover:bg-purple-100
              transition-colors
            "
          >
            {/* Play Icon */}
            <svg
              className="w-5 h-5 mr-2 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M4 2.5v15l12-7.5-12-7.5z" />
            </svg>
            Watch Video
          </button>
        </div>

        {/* Right Column: "Video" box */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* A placeholder black box with a bright border for the video preview */}
          <div
            className="
              w-full
              max-w-md
              h-56
              rounded-xl
              bg-black
              border-4
              border-blue-500
            "
          >
            {/* 
              Put your actual video/image here. For example:
              <img
                src="/path/to/video-thumbnail.jpg"
                alt="Video preview"
                className="w-full h-full object-cover rounded-xl"
              />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
