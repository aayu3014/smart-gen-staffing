import React from "react";
import { Upload } from "lucide-react"; // from lucide-react

export default function ATSscreening() {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Heading & Subheading */}
        <h1 className="text-4xl font-bold mb-2">
          AI powered ATS screening
        </h1>
        <p className="text-gray-600 mb-8">
          Upload your resume and desired job description for quick optimization.
        </p>

        {/* Drag and Drop Section */}
        <div className="border-2 border-[#A1469E] rounded-lg p-6 mb-6 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left content: Icon + text */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Upload className="w-6 h-6 text-[#A1469E]" />
              <div>
                <p className="font-semibold text-gray-900">
                  Drag and drop file here
                </p>
                <p className="text-sm text-gray-500">
                  Limit 200MB per file. PDF
                </p>
              </div>
            </div>

            {/* Upload Button */}
            <button className="bg-[#A1469E] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Upload File
            </button>
          </div>
        </div>

        {/* No Resume + Link */}
        <div className="mb-6 text-gray-700">
          <span>No resume yet? Create one </span>
          <a href="#" className="text-pink-500 hover:underline">
            here
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="border border-[#A1469E] text-[#A1469E] rounded-md px-4 py-2 hover:bg-purple-50 transition-colors">
            Extracted Resume data
          </button>
          <button
  className="
    border 
    border-gray-300 
    text-gray-700 
    rounded-md 
    px-4 
    py-2 
    transition-all 
    duration-200 
    hover:bg-gray-100
    hover:shadow-md
    hover:-translate-y-0.5
  "
>
  Job Description
</button>

        </div>
      </div>
    </div>
  );
}
