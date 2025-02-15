"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, LogIn, FacebookIcon } from "lucide-react"; // ✅ Correct imports

export default function CreateAccountPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo Section */}
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="Smart Gen Staffing Logo"
          width={200}
          height={80}
          priority
        />
      </div>

      {/* Heading Section */}
      <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
        Create account
      </h1>

      <p className="text-gray-500 text-sm md:text-base mb-6 text-center">
        Start your <span className="font-medium">30-day free trial.</span> Cancel anytime.
      </p>

      {/* Social Logins */}
      <div className="w-full max-w-md">
        <button className="w-full flex items-center justify-center border border-gray-300 bg-white text-black py-3 rounded-lg mb-4 shadow-sm hover:bg-gray-100 transition">
          <LogIn className="w-5 h-5 text-black mr-3" /> Sign up with Google
        </button>

        <button className="w-full flex items-center justify-center border border-gray-300 bg-white text-black py-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <FacebookIcon className="w-5 h-5 text-blue-600 mr-3" /> Sign up with Facebook
        </button>
      </div>

      {/* OR Separator */}
      <div className="flex items-center w-full max-w-md my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-500 text-sm">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Form Inputs */}
      <div className="w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
  type="email"
  placeholder="johndoe@mail.com"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:outline-[#A1469E]"
  onMouseEnter={(e) => (e.target.placeholder = "")} // Remove placeholder on hover
  onMouseLeave={(e) => (e.target.placeholder = "johndoe@mail.com")} // Restore placeholder when not hovering
/>


        <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="********"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 pr-10 focus:outline-[#A1469E]"
            onMouseEnter={(e) => (e.target.placeholder = "")} // Remove placeholder on hover
            onMouseLeave={(e) => (e.target.placeholder = "********")} // Restore placeholder when not hovering
          />
          <button
            type="button"
            className="absolute top-3 right-4 text-gray-600"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Create Account Button */}
      <button className="w-full max-w-md bg-[#A1469E] hover:bg-[#892d7b] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 mt-6">
        Create Account
      </button>

      {/* Already have an account */}
      <p className="text-gray-600 text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-[#A1469E] font-medium hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
