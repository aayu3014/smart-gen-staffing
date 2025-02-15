"use client";
import React from "react";

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800">Choose Plan</h2>
        <p className="text-gray-600">That’s Right For You</p>
        <p className="text-gray-500 mt-2">
          Choose a plan that works best for you, feel free to contact us
        </p>

        {/* Toggle for Monthly/Yearly */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-700">
            Bil Monthly
          </button>
          <button className="px-6 py-2 bg-[#A1469E] text-white rounded-full shadow-md">
            Bil Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between border border-gray-200">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="text-gray-600">Have a go and test your superpowers</p>
            <p className="text-5xl font-bold text-gray-800 mt-4">$0</p>
            <ul className="mt-6 space-y-2 text-gray-600 text-left">
              <li>✔ 5 Employees</li>
              <li>✔ 2 Departments</li>
              <li>✔ Public Share & Comments</li>
              <li>✔ Chat Support</li>
              <li>✔ 5 Projects</li>
            </ul>
            <button className="mt-6 bg-[#A1469E] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Signup for Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between border border-gray-200 relative">
            <div className="bg-[#A1469E] text-white rounded-t-lg py-4">
              <h3 className="text-xl font-bold">Pro</h3>
              <p>Experiment the power of infinite possibilities</p>
            </div>
            <p className="text-5xl font-bold text-gray-800 mt-8">$499</p>
            <p className="text-sm text-pink-600 bg-pink-100 px-4 py-1 rounded-full mt-2 inline-block">
              Save $50 a year
            </p>
            <ul className="mt-6 space-y-2 text-gray-600 text-left">
              <li>✔ All features of the free plan</li>
              <li>✔ 20 Employees</li>
              <li>✔ 5 Departments</li>
              <li>✔ 10 Video Meetings/Month</li>
              <li>✔ Salary Payroll</li>
            </ul>
            <button className="mt-6 bg-[#A1469E] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Go to Pro
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between border border-gray-200">
            <h3 className="text-xl font-bold">Business</h3>
            <p className="text-gray-600">
              Unveil new superpowers and join the Design League
            </p>
            <p className="text-5xl font-bold text-[#A1469E] mt-4">$4999</p>
            <ul className="mt-6 space-y-2 text-gray-600 text-left">
              <li>✔ All features of the Pro plan</li>
              <li>✔ Unlimited Employees</li>
              <li>✔ Unlimited Departments</li>
              <li>✔ Unlimited Meetings</li>
              <li>✔ Dedicated Service</li>
            </ul>
            <button className="mt-6 bg-[#A1469E] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Go to Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

