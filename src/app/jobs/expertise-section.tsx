"use client";
import React from "react";
import {
  Search,
  Users,
  Briefcase,
  Wrench,
} from "lucide-react"; // Import Lucide icons

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-[#A1469E] flex justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full bg-[#FBE7F3] rounded-2xl p-10 shadow-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="bg-white text-[#A1469E] px-6 py-2 rounded-full font-semibold mb-4 shadow-md hover:bg-[#A1469E] hover:text-white transition duration-300">
            Learn more
          </button>
          <h2 className="text-3xl font-bold text-gray-800">Our Expertise</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Smart Gen Staffing, we pride ourselves on our deep industry
            knowledge and extensive experience in delivering customized
            workforce solutions.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/** Card Component */}
          {expertiseData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center">
              <div className="bg-[#A1469E] p-3 rounded-full w-12 h-12 flex justify-center items-center text-white mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                {item.description}
              </p>
              <button className="mt-auto bg-white text-[#A1469E] px-4 py-2 rounded-full font-semibold shadow-md hover:bg-[#A1469E] hover:text-white transition duration-300">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Expertise Data for mapping
const expertiseData = [
  {
    icon: <Users size={20} />,
    title: "Staffing Solutions",
    description:
      "Whether you're looking for temporary workers, contract-to-hire arrangements, or permanent placements, we have you covered.",
    buttonText: "Explore Now",
  },
  {
    icon: <Search size={20} />,
    title: "Talent Search",
    description:
      "We specialize in connecting businesses with top talent efficiently and effectively.",
    buttonText: "Learn More",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Career Development",
    description:
      "Our career coaching services help candidates land their dream jobs with confidence.",
    buttonText: "Get Started",
  },
  {
    icon: <Wrench size={20} />,
    title: "Workforce Solutions",
    description:
      "We provide workforce solutions that align with your business goals and needs.",
    buttonText: "Discover More",
  },
];
