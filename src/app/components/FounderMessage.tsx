import React from "react";

const FounderMessage = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Title */}
        <h2 className="text-3xl font-medium text-center text-gray-900 mb-12">
          Message from the Founder
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Smart Gen Staffing has been an invaluable partner in our growth
          journey. Their team&apos;s expertise, responsiveness, and ability to
          identify the right candidates have been instrumental in building our
          high-performing workforce
        </p>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision & Mission Card */}
          <div className="bg-[#FFFAF0] p-10 rounded-3xl">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Vision & Mission
            </h3>
            <p className="text-gray-600 mb-4">
              At SmartGen Staffing, I envision a world where hiring is seamless
              and fulfilling for both businesses and job seekers. Our mission is
              to redefine the recruitment experience by building strong
              relationships and delivering exceptional value.
            </p>
            <p className="text-gray-600">
              As a founder, my goal is to empower individuals and organizations
              to thrive by connecting the right talent...
            </p>
          </div>

          {/* Approach & Values Card */}
          <div className="bg-[#FFFAF0] p-10 rounded-3xl">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Approach & Values
            </h3>
            <p className="text-gray-600">
              SmartGen Staffing was born out of a passion for innovation and a
              desire to make hiring simple, transparent, and efficient. I
              believe that every connection we make has the power to create
              meaningful impact—for both businesses and candidates...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
