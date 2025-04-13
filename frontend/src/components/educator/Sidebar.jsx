import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../../LMS_assets/assets/assets'

const Sidebar=()=> {

  const {isEducator} =  useContext(AppContext)

  const menuItems =[
    {name: 'Dashboard', path: '/educator', icon:assets.home_icon},
    {name: 'Add Course', path: '/educator/add-course', icon:assets.add_icon},
    {name: 'My Courses', path: '/educator/mycourses', icon:assets.my_course_icon},
    {name: 'Students Enrolled', path: '/educator/student-enrolled', icon:assets.person_tick_icon},
  ]

  return isEducator && (
    <div className="md:w-64 w-20 bg-white border-r border-gray-200 min-h-screen py-6 px-2 shadow-xl flex flex-col gap-1 transition-all duration-500">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === '/educator'}
          className={({ isActive }) =>
            `flex items-center md:flex-row flex-col md:justify-start justify-center py-3 px-2 md:px-4 gap-3 rounded-lg font-medium text-sm transition duration-300 ease-in-out cursor-pointer group
            ${
              isActive
                ? 'bg-gradient-to-r from-[#5E17EB] to-[#8E2DE2] text-white shadow-md'
                : 'hover:bg-gray-100 text-gray-800'
            }`
          }
        >
          <img
            src={item.icon}
            alt="icon"
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 ease-in-out"
          />
          {/* Visible text label for full sidebar */}
          <p className="hidden md:block tracking-wide">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
  
  
  
}

export default Sidebar