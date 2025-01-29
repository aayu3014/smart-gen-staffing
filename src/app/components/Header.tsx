"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white">
      <div className="px-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Smart Gen Staffing"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              All Jobs
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Candidate services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Business Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Join Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-[#FF4D8D] hover:bg-[#FF3377] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Join Today
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 bg-white z-50 border-b border-gray-200`}
        >
          <div className="px-4 py-3 space-y-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              All Jobs
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              Candidate services
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              Business Services
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 font-medium"
            >
              Contact
            </a>
            <button className="w-full bg-[#FF4D8D] text-white px-4 py-2 rounded-full text-sm font-medium">
              Join Today
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
