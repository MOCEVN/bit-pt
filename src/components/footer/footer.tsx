// src/components/logos/footer/footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="#privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-gray-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
