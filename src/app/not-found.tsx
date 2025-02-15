"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-6">
      {/* Illustration */}
      <div className="relative w-80 h-80">
        <Image 
          src="/images/404-illustration.png" // Replace with your actual illustration path
          alt="404 Not Found"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Text Section */}
      <h1 className="text-4xl font-bold text-[#A1469E] mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
  {/* Home Button */}
  <Link href="/">
    <button className="px-6 py-3 border border-[#A1469E] text-[#A1469E] rounded-lg shadow-md transition group hover:bg-[#A1469E] hover:text-white">
      Go Back Home
    </button>
  </Link>

  {/* Contact Support Button */}
  <Link href="/contact">
    <button className="px-6 py-3 border border-[#A1469E] text-[#A1469E] rounded-lg shadow-md transition group hover:bg-[#A1469E] hover:text-white">
      Contact Support
    </button>
  </Link>
</div>


      {/* Follow Us Section */}
      <div className="mt-8 text-gray-600">Follow us:</div>
      <div className="flex space-x-4 mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#A1469E] hover:text-[#8b3a8e] transition">
          <Facebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#A1469E] hover:text-[#8b3a8e] transition">
          <Twitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#A1469E] hover:text-[#8b3a8e] transition">
          <Instagram size={30} />
        </a>
      </div>
    </div>
  );
}
