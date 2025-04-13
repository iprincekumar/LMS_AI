import React from 'react'
import { assets } from '../../LMS_assets/assets/assets';

const Companies=() => {
  return (
    <div className="pt-20 pb-12 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <p className="text-center text-xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
        🌍 Trusted by Professionals from Leading Global Brands
      </p>
  
      <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-16">
        {[assets.google, assets.tesla, assets.amazon, assets.ibm, assets.facebook, assets.netflix, assets.insta].map(
          (logo, index) => (
            <div
              key={index}
              className="w-20 md:w-24 p-3 backdrop-blur-sm bg-white/70 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105 animate-float"
            >
              <img
                src={logo}
                alt={`brand-${index}`}
                className="w-full h-auto object-contain"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
  
  
    };
    

export default Companies