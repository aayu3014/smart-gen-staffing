"use client";
import React from "react";

const jobs = [
  { id: 1, title: "Email Marketing", icon: "📧", description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts." },
  { id: 2, title: "Visual Designer", icon: "🎨", description: "We are looking for a Visual Designer to create engaging and on-brand graphics for a variety of media." },
  { id: 3, title: "Data Analyst", icon: "📊", description: "Join us as a Data Analyst and help analyze and interpret complex data sets for better decision making." },
  { id: 4, title: "Content Writer", icon: "✍️", description: "Be a part of our content team and create compelling written materials for our platform." },
  { id: 5, title: "Product Designer", icon: "⚙️", description: "Work with UX/UI designers and engineers to improve user experience and product features." },
  { id: 6, title: "PHP/JS Developer", icon: "💻", description: "Join our development team and work on exciting projects using PHP and JavaScript." },
  { id: 7, title: "Plugin Developer", icon: "🔌", description: "Help develop and maintain plugins for our core products." },
  { id: 8, title: "Digital Marketer", icon: "📢", description: "Lead our digital marketing campaigns and drive engagement through SEO and PPC strategies." },
];

export default function FeaturedJobs() {
  return (
    <section className="w-full min-h-screen bg-[radial-gradient(circle_at_center,_#A1469E_0%,_#7B2A6F_100%)] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-white">Featured Jobs</h2>
          <a href="#" className="text-[#FFC107] hover:text-white transition duration-300 text-sm font-semibold">
            Browse All →
          </a>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#ffffff1a] border border-[#ffffff33] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:border-white hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{job.icon}</span>
                <span className="text-xs uppercase text-[#FFC107] font-semibold">Full Time</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{job.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{job.description}</p>
              <a href="#" className="text-[#A1469E] hover:text-white font-semibold mt-4 inline-block transition duration-300">
                More Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
