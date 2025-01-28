import React from "react";
import { Phone } from "lucide-react";


interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 bg-black w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Phone className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
          <span className={scrolled ? "text-black" : "text-white"}>SmartOX</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className={`${scrolled ? "text-black" : "text-white"} hover:text-gray-500 transition-colors`}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className={`${scrolled ? "text-black" : "text-white"} hover:text-gray-500 transition-colors`}
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className={`${scrolled ? "text-black" : "text-white"} hover:text-gray-500 transition-colors`}
          >
            Pricing
          </a>
        </div>
     
          <button
            className={`${scrolled ? "bg-black text-white" : "bg-white text-black"} px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
          >
            Get Started
          </button>
        
      </nav>
    </header>
  );
}
