import React from 'react'
import { assets } from '../../LMS_assets/assets/assets'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Logo + About Section */}
            <div>
              <img src={assets.logo_dark} alt="Company Logo" className="h-12 mb-4 ml-20" />
              <p className="text-gray-400">
                Elevate your experience with our innovative solutions. We strive for excellence and innovation to empower businesses and individuals alike.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition">Our Services</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Social Media + Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                  <img src={assets.fb} alt="Facebook" className="h-11 ml-30" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                  <img src={assets.twitter} alt="Twitter" className="h-10 ml-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
                  <img src={assets.linkedin} alt="LinkedIn" className="h-10 ml-5" />
                </a>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="p-2 text-white rounded-l-lg bg-gray-800 border-t border-b border-l border-gray-700 w-full"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition hover:scale-105 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
  
          </div>
  
          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} EduGenius AI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  