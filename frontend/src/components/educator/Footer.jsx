import React from 'react';
import { assets } from '../../LMS_assets/assets/assets';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/20 to-purple-800/10 animate-pulse opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <img src={assets.logo_dark} alt="EDUGENIUS AI Logo" className="h-14 mb-3" />
          <p className="text-gray-400 max-w-xs text-sm md:text-base leading-relaxed">
            Empowering educators with next-gen tools to teach, inspire, and lead in the digital age.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <h4 className="text-white text-lg font-semibold mb-2">Quick Links</h4>
          <a href="/about" className="text-gray-400 hover:text-cyan-400 transition duration-200">About Us</a>
          <a href="/courses" className="text-gray-400 hover:text-cyan-400 transition duration-200">Courses</a>
          <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition duration-200">Contact</a>
          <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition duration-200">Privacy Policy</a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start gap-3 text-sm md:text-base">
          <h4 className="text-white text-lg font-semibold">Connect</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"><FaLinkedinIn /></a>
            <a href="mailto:support@edugenius.ai" className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm md:text-base text-gray-500">
        &copy; {new Date().getFullYear()} EduGenius AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
