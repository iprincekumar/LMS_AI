import React, { useState } from 'react';

const About = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);

  return (
    <div className="px-6 md:px-16 py-12 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-700 mb-4">About EduGenius AI</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          EduGenius AI is a forward-thinking educational platform that empowers educators and learners with smart tools, 
          adaptive content, and real-time analytics. We blend artificial intelligence with modern pedagogy to redefine the future of learning.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center mt-10">
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Mission</h3>
          <p className="text-sm text-gray-600">To make intelligent, personalized education accessible to all, anywhere in the world.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Vision</h3>
          <p className="text-sm text-gray-600">To become the global benchmark for AI-powered learning and educator empowerment.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Core Values</h3>
          <p className="text-sm text-gray-600">Innovation, Inclusivity, Integrity, and Impact-driven education for all learners.</p>
        </div>
      </div>

      <div className="text-center mt-16">
        <button 
          onClick={() => setShowDeveloper(!showDeveloper)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          {showDeveloper ? "Hide Developer Info" : "Meet the Developer"}
        </button>

        {showDeveloper && (
  <div className="mt-10 max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500">
    <img
      src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2ZE1RRG15M3dENVJsWjQ2UEt0TjRDTzJJSSJ9?" // Replace with your actual image link
      alt="Developer"
      className="w-40 h-40 rounded-full border-4 border-cyan-600 shadow-md object-cover"
    />
    
    <div className="text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">👨‍💻 Prince Kumar</h2>
      <h4 className="text-cyan-600 font-medium mb-4">Full Stack Developer | AI & ML Enthusiast</h4>
      <p className="text-gray-600 mb-3">
        I’m the developer behind <strong>EduGenius AI</strong>, with a passion for building smart learning solutions that combine the power of AI and modern web technologies.
      </p>
      <p className="text-gray-600 mb-3">
        Skilled in React, Node.js, Python, and deep learning frameworks, I aim to make tech impactful and education accessible.
      </p>

      <div className="flex gap-5 mt-4">
        <a href="mailto:princekumar082078@gmail.com" className="text-cyan-600 hover:text-cyan-800 transition" title="Email">
          📧 <span className="underline">Email</span>
        </a>
        <a href="https://www.linkedin.com/in/prince-kumar-4a6707288/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 transition" title="LinkedIn">
          💼 <span className="underline">LinkedIn</span>
        </a>
        <a href="https://github.com/iprincekumar" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 transition" title="GitHub">
          🐱 <span className="underline">GitHub</span>
        </a>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default About;
