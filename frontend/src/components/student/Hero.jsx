import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../LMS_assets/assets/assets";
import SearchBar from "./SearchBar";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20 px-6 lg:px-36 flex flex-col lg:flex-row items-center">
//       {/* Left Content */}
//       <div className="lg:w-1/2 text-center lg:text-left">
//         <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//           Learn from the Best, <br /> Anytime, Anywhere
//         </h1>
//         <p className="mt-4 text-lg text-gray-100">
//           Join thousands of learners and explore high-quality courses from top educators.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//           <Link to="/courses" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
//             Explore Courses
//           </Link>
//           <Link to="/register" className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition">
//             Get Started
//           </Link>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
//         <img src={assets.heroimg} alt="Learning Online" className="w-full max-w-lg drop-shadow-lg" />
//       </div>
//     </section>
//   );



return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-24 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 relative">
      
      <h1 className="whitespace-pre-line md:text-4xl text-2xl font-bold leading-tight relative z-10">
      <Typewriter
        words={['Transforming Education,\n One Click at a Time!']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={60}
        delaySpeed={1000}
      /> 
        <span className="text-blue-600"> #EduGeniusAI</span>
      </h1>
  
      {/* Sketch Image Positioned Top Right on Large Screens */}
      <img 
        src={assets.sketch} 
        alt="sketch" 
        className="hidden md:block w-20 lg:w-28 absolute top-10 right-10 opacity-80" 
      />
  
      {/* Desktop View Description */}
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto z-10">
        "Join a world-class learning platform where innovation meets education. Gain knowledge, enhance your skills, and connect with experts—all at your own pace." 🚀📚
      </p>
  
      {/* Mobile View Description */}
      <p className="md:hidden text-gray-500 max-w-2xl mx-auto z-10">
        Empowering Learning with AI-Powered Education
      </p>
  
      {/* Search Bar */}
      <SearchBar />
    </div>
  );
  
  
};

export default Hero;
