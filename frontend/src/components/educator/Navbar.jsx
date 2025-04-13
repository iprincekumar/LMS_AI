import React from 'react'
import { dummyEducatorData, assets } from '../../LMS_assets/assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
  const educatorData = dummyEducatorData

  const {user} = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-10 py-4 bg-[#2E1A47] text-white shadow-md sticky top-0 z-50">
      <Link to="/" className="hover:scale-105 transform transition duration-300 ease-in-out">
        <img src={assets.logo} alt="Logo" className="w-32 lg:w-44 drop-shadow-xl" />
      </Link>
  
      <div className="flex items-center gap-4 relative">
        <p className="text-sm md:text-base font-light tracking-wide">
          Hi! <span className="font-semibold">{user ? user.fullName : 'Developer'}</span>
        </p>
        {user ? (
          <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
            <UserButton />
          </div>
        ) : (
          <img
            src={assets.profile_img}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover shadow-md hover:shadow-indigo-300 transition duration-300"
          />
        )}
      </div>
    </div>
  );
  
  
  
}

export default Navbar