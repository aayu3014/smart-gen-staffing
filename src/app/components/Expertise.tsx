import React from "react";
import { Briefcase, Puzzle, Globe, CheckCircle } from "lucide-react";

const ExpertiseSection = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-gray-600" />,
      title: "Staffing Solutions",
      description:
        "Whether you're looking for temporary workers, contract-to-hire arrangements, or permanent positions, our comprehensive staffing solutions are designed to meet your unique workforce requirements",
      buttonText: "Explore Now",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-gray-600" />,
      title: "Tailored Recruitment",
      description:
        "We specialize in understanding your unique needs and providing customized hiring strategies to find the right talent for your business",
      buttonText: "Explore Now",
    },
    {
      icon: <Globe className="w-8 h-8 text-gray-600" />,
      title: "Industry-Specific Hiring",
      description:
        "Our deep knowledge across industries helps us match the right talent with your business. We understand your specific needs to provide top-tier recruitment. Partner with us for expert-driven results",
      buttonText: "Explore Now",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gray-600" />,
      title: "Efficient Hiring",
      description:
        "From sourcing to onboarding, we make hiring seamless and effective. Save time while we handle and track talent for your team. Experience quality results with our proven approach.",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div className="w-full bg-pink-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="bg-white text-[#9B4B9C] px-4 py-1.5 rounded-full text-sm mb-6">
            Learn more
          </button>
          <h2 className="text-3xl font-medium text-gray-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-gray-600">
            At Smart Gen Staffing, we pride ourselves on our deep industry
            knowledge and extensive experience in delivering customized
            workforce solutions. From temporary staffing to direct hires, our
            team of experts is equipped to handle all your staffing needs,
            ensuring you have the right people in place to drive your business
            forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl flex flex-col">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <button className="text-[#9B4B9C] font-medium text-left hover:text-[#8A3F8B] transition-colors">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
