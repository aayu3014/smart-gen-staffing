"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      
      {/* ✅ Fixed Image Section */}
      <div className="w-80 h-80 flex justify-center items-center">
        <Image
          src="/404.png" // ✅ Correct Path (Make Sure `404.png` Exists in `/public/`)
          alt="Page Not Found"
          width={500} 
          height={400}
          className="max-w-full h-auto object-contain"
          priority
        />
      </div>

      {/* ✅ Text Section */}
      <h1 className="text-4xl font-bold text-[#A1469E] mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for doesn’t exist or has been moved.</p>

      {/* ✅ Buttons */}
      <div className="flex gap-4 mt-6">
        <Link href="/">
          <button className="px-6 py-3 bg-[#A1469E] text-white rounded-full font-semibold shadow-md hover:bg-[#8B318A] transition duration-300">
            Go Back Home
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-6 py-3 border border-[#A1469E] text-[#A1469E] rounded-full font-semibold shadow-md hover:bg-[#A1469E] hover:text-white transition duration-300">
            Contact Support
          </button>
        </Link>
      </div>
    </section>
  );
}
