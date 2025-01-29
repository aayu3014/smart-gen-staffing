import React from "react";

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Services", href: "#" },
      { name: "Blog", href: "#" },
    ],
    resources: [
      { name: "Job Search", href: "#" },
      { name: "Resume Tips", href: "#" },
      { name: "Interview Prep", href: "#" },
      { name: "Career Advice", href: "#" },
    ],
    connectWithUs: [
      { name: "LinkedIn", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-[#FFF4EDBD] py-16 mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Copyright Column */}
          <div className="md:col-span-3">
            <img
              src="/logo.png"
              alt="Smart Gen Staffing"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-600">
              © 2024 Smart gen staffing.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-3">
              {footerLinks.connectWithUs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
