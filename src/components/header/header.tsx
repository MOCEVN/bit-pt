import React from "react";
import DynamicLogo from "@integratorsai/prototype.dynamic-logo.dynamic-logo";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <DynamicLogo />
        </div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
