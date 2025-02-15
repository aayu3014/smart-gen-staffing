"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // A small helper to check if the current route starts with a given path
  // so we can highlight subroutes as well, e.g. "/candidate-services/..."
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white">
      <div className="px-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Smart Gen Staffing"
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className={
                isActive("/jobs")
                  ? "text-[#A1469E] font-semibold text-sm"
                  : "text-gray-700 hover:text-gray-900 text-sm font-medium"
              }
            >
              All Jobs
            </Link>
            <Link
              href="/candidate-services"
              className={
                isActive("/candidate-services")
                  ? "text-[#A1469E] font-semibold text-sm"
                  : "text-gray-700 hover:text-gray-900 text-sm font-medium"
              }
            >
              Candidate Services
            </Link>
            <Link
              href="/business-services"
              className={
                isActive("/business-services")
                  ? "text-[#A1469E] font-semibold text-sm"
                  : "text-gray-700 hover:text-gray-900 text-sm font-medium"
              }
            >
              Business Services
            </Link>
            <Link
              href="/contact"
              className={
                isActive("/contact")
                  ? "text-[#A1469E] font-semibold text-sm"
                  : "text-gray-700 hover:text-gray-900 text-sm font-medium"
              }
            >
              Contact
            </Link>
          </div>

          {/* Join Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/join">
              <button className="bg-[#FF4D8D] hover:bg-[#FF3377] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Join Today
              </button>
            </Link>
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
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white z-50 border-b border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link
                href="/jobs"
                className={
                  isActive("/jobs")
                    ? "block text-[#A1469E] font-semibold"
                    : "block text-gray-700 hover:text-gray-900 font-medium"
                }
              >
                All Jobs
              </Link>
              <Link
                href="/candidate-services"
                className={
                  isActive("/candidate-services")
                    ? "block text-[#A1469E] font-semibold"
                    : "block text-gray-700 hover:text-gray-900 font-medium"
                }
              >
                Candidate Services
              </Link>
              <Link
                href="/business-services"
                className={
                  isActive("/business-services")
                    ? "block text-[#A1469E] font-semibold"
                    : "block text-gray-700 hover:text-gray-900 font-medium"
                }
              >
                Business Services
              </Link>
              <Link
                href="/contact"
                className={
                  isActive("/contact")
                    ? "block text-[#A1469E] font-semibold"
                    : "block text-gray-700 hover:text-gray-900 font-medium"
                }
              >
                Contact
              </Link>
              <Link href="/join">
                <button className="w-full bg-[#FF4D8D] text-white px-4 py-2 rounded-full text-sm font-medium mt-2">
                  Join Today
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
