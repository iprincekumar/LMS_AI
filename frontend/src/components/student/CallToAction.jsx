import React from 'react'

const CallToAction=()=> {
  return (
    <div className="text-center py-12 px-6 bg-white">
    <h1 className="text-4xl font-bold text-gray-900">
        Unlock Limitless Learning Opportunities
    </h1>
    <p className="mt-4 text-lg text-gray-600">
        Empower yourself with knowledge anytime, anywhere. Whether you're a beginner or an expert,<br/> our platform provides curated courses designed to help you excel in your field.
    </p>
    <div className="mt-4 text-gray-700 font-medium">
        💡 <span className="text-blue-600">Flexible Learning</span> | 
        <span className="text-green-600">Expert-Led</span> | 
        <span className="text-purple-600">Industry-Recognized Certifications</span>
    </div>
    <p className="mt-6 text-lg font-semibold text-gray-800">
        🚀 Your journey to success starts today!
    </p>
    <div className="mt-6 flex justify-center space-x-6">
        <a href="#" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
        </a>
        <a href="#" className="px-6 py-3 text-lg font-semibold text-gray-900 flex items-center space-x-2 hover:underline">
            <span>Learn More</span> 
            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</div>

  )
}

export default CallToAction