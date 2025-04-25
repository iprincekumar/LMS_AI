import React from 'react';
import { FaChalkboardTeacher, FaVideo, FaRobot, FaCertificate, FaChartLine, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert-Led Courses",
    description: "Learn from top educators and industry professionals with years of experience in their fields.",
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered Personalization",
    description: "Smart recommendations and adaptive learning paths tailored to each student’s strengths and pace.",
  },
  {
    icon: <FaVideo />,
    title: "Interactive Video Lectures",
    description: "Engaging, high-quality video content with real-time quizzes, notes, and chapter navigation.",
  },
  {
    icon: <FaCertificate />,
    title: "Certifications",
    description: "Get recognized for your learning with verified certificates to boost your academic and career profile.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    description: "Real-time dashboards that help learners and educators monitor progress, performance, and milestones.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Our support team is here to help you anytime, ensuring a smooth and stress-free learning journey.",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">🚀 Our Services</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Empowering learners and educators with cutting-edge technology and support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105 duration-300 hover:shadow-xl"
            >
              <div className="text-cyan-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
