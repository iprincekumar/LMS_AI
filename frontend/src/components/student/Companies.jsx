import React from 'react'
import { assets } from '../../LMS_assets/assets/assets';

const Companies=() => {
      return (
        <div className="pt-16">
          <p className="text-base text-center md:text-2xl font-semibold text-gray-500">
            Our Learners Come from Top Global Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
                <img src={assets.google} alt="google" className="w-15 md:w-20" />
                <img src={assets.tesla} alt="tesla" className="w-15 md:w-20" />
                <img src={assets.amazon} alt="amazon" className="w-15 md:w-20" />
                <img src={assets.ibm} alt="ibm" className="w-15 md:w-20" />
                <img src={assets.facebook} alt="facebook" className="w-15 md:w-20" />
                <img src={assets.netflix} alt="netflix" className="w-15 md:w-20" />
                <img src={assets.insta} alt="insta" className="w-15 md:w-20" />

          </div>
        </div>
      );
    };
    

export default Companies