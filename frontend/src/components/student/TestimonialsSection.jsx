import React from 'react'
import { assets, dummyTestimonial } from '../../LMS_assets/assets/assets'

const TestimonialsSection=()=> {
    return (
        <div className='pb-14 px-8 md:mx-0'>
          <h2 className='text-3xl font-medium text-gray-800'>Client Feedback</h2>
          <p className='md:text-base text-gray-500 mt-3'>
            Our users share their experiences on how our platform has enhanced their workflow,<br />
            improved efficiency, and contributed to their professional growth.
          </p>
      
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
            {dummyTestimonial.map((testimonial, index) => (
              <div
                key={index}
                className="relative text-sm text-left border border-gray-300 pb-6 rounded-xl bg-white shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-blue-200 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp h-[320px] w-[300px]"
              >
                {/* Header */}
                <div className='flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-gray-100 to-gray-200'>
                  <img className='h-14 w-14 rounded-full border-2 border-gray-400' src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h1 className='text-lg font-semibold text-gray-900'>{testimonial.name}</h1>
                    <p className='text-gray-600'>{testimonial.role}</p>
                  </div>
                </div>
      
                {/* Feedback Content */}
                <div className='p-5 pb-7'>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        className={`h-5 transition-opacity duration-300 ${i < Math.floor(testimonial.rating) ? 'opacity-100' : 'opacity-40'}`}
                        src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                        alt="star"
                      />
                    ))}
                  </div>
                  <p className='text-gray-600 mt-4 italic leading-relaxed'>{testimonial.feedback}</p>
                </div>
      
                {/* Read More */}
                <a
                  href="#"
                  className='absolute bottom-4 right-5 px-3 py-1 text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 rounded-full text-xs font-medium transition-all duration-300 ease-in-out'
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default TestimonialsSection