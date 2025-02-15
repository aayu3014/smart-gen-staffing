import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
//   Facebook, 
//   Instagram,  
} from 'lucide-react';

export default function ContactForm() {

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-2">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Any question or remarks? Just write us a message!
        </p>

        {/* Container for the purple info box & the form */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left Side: Contact Information */}
          <div className="bg-[#A1469E] text-white p-8 md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="text-sm">
              Say something to start a live chat!
            </p>
            <div className="flex items-center mt-4">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>smartgenstaffing@gmail.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 mt-1" />
              <span>132 Dartmouth Street Boston,<br/> 
                Massachusetts 02156 United States
              </span>
            </div>

            {/* Social icons (placeholder) */}
            <div className="flex space-x-4 pt-6">
              {/* <Whatsapp className="cursor-pointer" />
              <Facebook className="cursor-pointer" />
              <Instagram className="cursor-pointer" /> */}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:w-2/3">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label 
                    htmlFor="firstName" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    placeholder="First Name"
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label 
                    htmlFor="lastName" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    placeholder="Email"
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    placeholder="+1 012 3456 789"
                  />
                </div>
              </div>

              {/* Subject Options */}
              <div className="mb-6">
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Select Subject?
                </p>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center text-sm">
                    <input 
                      type="radio" 
                      name="subject" 
                      value="General Inquiry" 
                      defaultChecked 
                      className="mr-1" 
                    />
                    General Inquiry
                  </label>
                  <label className="flex items-center text-sm">
                    <input 
                      type="radio" 
                      name="subject" 
                      value="General Inquiry 2" 
                      className="mr-1" 
                    />
                    General Inquiry
                  </label>
                  <label className="flex items-center text-sm">
                    <input 
                      type="radio" 
                      name="subject" 
                      value="General Inquiry 3" 
                      className="mr-1" 
                    />
                    General Inquiry
                  </label>
                  {/* Add more radio inputs or adapt as needed */}
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  placeholder="Write your message.."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#A1469E] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Contact us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
