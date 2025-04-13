import React from 'react'

const CallToAction=()=> {
    return (
        <div className="text-center py-16 px-6 md:px-12 bg-white animate-fadeIn transition-all duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Unlock Limitless Learning Opportunities
          </h1>
      
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Empower yourself with knowledge anytime, anywhere. Whether you're a beginner or an expert,<br className="hidden md:block" />
            our platform provides curated courses designed to help you excel in your field.
          </p>
      
          <div className="mt-5 text-gray-700 font-medium flex flex-wrap justify-center gap-4">
            <span>💡 <span className="text-blue-600">Flexible Learning</span></span>
            <span>🌟 <span className="text-green-600">Expert-Led</span></span>
            <span>🏅 <span className="text-purple-600">Industry-Recognized Certifications</span></span>
          </div>
      
          <p className="mt-8 text-lg font-semibold text-gray-800">
            🚀 Your journey to success starts today!
          </p>
      
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex items-center text-lg font-medium text-indigo-700 hover:underline hover:text-indigo-800 transition"
            >
              <span>Learn More</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      );
      
}

export default CallToAction