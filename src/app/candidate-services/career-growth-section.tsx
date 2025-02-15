'use client';
import React from 'react';

// Example category data:
const categories = [
  { icon: '🩺', label: 'Healthcare', count: 890 },
  { icon: '👩‍💻', label: 'Programming', count: 18 },
  { icon: '💼', label: 'Sales and Marketing', count: 88 },
  { icon: '🛠️', label: 'Product Designer', count: 6 },
  { icon: '💰', label: 'Finance', count: 67 },
  { icon: '🌸', label: 'Horticulture', count: 96 },
  { icon: '📦', label: 'Logistics', count: 88 },
  { icon: '👮', label: 'Security', count: 4 },
  { icon: '🔫', label: 'Special Forces', count: 47 },
  { icon: '📄', label: 'Content Writing', count: 66 },
  { icon: '🏦', label: 'Banking', count: 76 },
  { icon: '🚗', label: 'Public Transport', count: 99 },
  { icon: '📊', label: 'Share Market', count: 77 },
  { icon: '👶', label: 'Baby Sitter', count: 56 },
  { icon: '🏠', label: 'House Helper', count: 18 },
  { icon: '➕', label: '88 more', count: null },
];

export default function CareerGrowthSection() {
  return (
    <section className="w-full bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#A1469E] mb-2">
          Explore Career Growth
        </h2>
        {/* Subheading */}
        <p className="text-gray-600 text-lg">
          Get interviews from over 4000 companies across different domains.
        </p>

        {/* Category Chips */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="
                inline-flex items-center 
                gap-2 
                border border-gray-200 
                bg-white 
                rounded-full 
                px-4 py-2 
                text-gray-700
                shadow-sm
              "
            >
              <span className="text-xl">{cat.icon}</span>
              {/* If there's a count, show it, else just label */}
              {cat.count !== null 
                ? `${cat.label} (${cat.count})` 
                : cat.label
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

