import React from "react";

const ChooseUsSection = () => {
  const partnersList = [
    {
      name: "World Wide Technology (WWT)",
      description:
        "World Wide Technology (WWT) is a global leader in delivering innovative technology solutions that drive business transformation...",
      letter: "W",
    },
    {
      name: "State of Arizona",
      description:
        "The State of Arizona is a dynamic hub of innovation and opportunity, known for its thriving industries and commitment to economic growth. As our esteemed partner...",
      letter: "A",
    },
    {
      name: "UPS",
      description:
        "UPS, a global leader in logistics and supply chain solutions, is a trusted partner dedicated to delivering excellent...",
      letter: "U",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-[#647C97] p-12 md:p-16">
          <div className="space-y-10">
            {/* Why Choose Us Section */}
            <div>
              <h2 className="text-[#DA70D6] text-3xl font-bold mb-6">
                Why Choose Us
              </h2>
              <h3 className="text-white text-2xl font-medium mb-4">
                Our Approach
              </h3>
              <p className="text-white/90 leading-relaxed max-w-xl">
                At the heart of our success is a dedicated team of recruitment
                experts who leverage their industry knowledge and extensive
                networks to identify top talent and facilitate seamless hiring
                processes
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
              <button className="text-white text-left hover:text-white/80">
                Our Mission
              </button>
              <button className="text-white text-left hover:text-white/80">
                Our Values
              </button>
              <button className="text-white text-left hover:text-white/80">
                Our Vision
              </button>
              <button className="text-white text-left hover:text-white/80">
                Our Team
              </button>
            </div>

            {/* Trusted by Leading Brands */}
            <div className="pt-20">
              <h2 className="text-[#DA70D6] text-2xl font-bold">
                Trusted by Leading Brands
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section - Partners */}
        <div className="bg-[#FFFAF4] p-12 md:p-16">
          <h2 className="text-[#9B4B9C] text-2xl font-medium mb-12">
            Our Partners
          </h2>
          <div className="space-y-10">
            {partnersList.map((partner, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3EDF3] rounded-full flex items-center justify-center text-[#9B4B9C] font-medium">
                  {partner.letter}
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
