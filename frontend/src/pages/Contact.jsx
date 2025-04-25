import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">📞 Contact Us</h1>
        <p className="text-gray-600 mb-12 text-lg">
          We'd love to hear from you! Whether you have questions, feedback, or need support, we're here to help.
        </p>

        {/* Contact Information */}
        <div className="flex justify-around mb-16 text-center">
          <div className="flex flex-col items-center text-gray-800">
            <FaPhoneAlt className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="text-gray-600">+1 (234) 567-890</p>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <FaEnvelope className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="text-gray-600">support@edugenius.ai</p>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <FaMapMarkerAlt className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p className="text-gray-600">123 Education St, Suite 100, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

          {submitted ? (
            <div className="text-center text-gray-600">
              <h3 className="text-lg font-semibold">Thank you for reaching out!</h3>
              <p>Your message has been received, and we'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  rows="4"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
