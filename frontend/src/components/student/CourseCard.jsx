import React, { useContext } from 'react'
import { assets } from '../../LMS_assets/assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard=({course})=> {

const {currency, calculateRating} = useContext(AppContext)
return (
  <Link 
    to={`/course/${course._id}`} 
    onClick={() => scrollTo(0, 0)} 
    className="border border-gray-300 pb-5 overflow-hidden rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out bg-white"
  >
    <img 
      className="w-full h-44 object-cover" 
      src={course?.courseThumbnail || "default-image.jpg"} 
      alt="course" 
    />

    <div className="p-4 space-y-2 text-left">
      <h3 className="text-lg font-semibold text-gray-800 truncate">
        {course?.courseTitle || "Untitled Course"}
      </h3>
      <p className="text-sm text-gray-500">
        {course?.educator?.name || "Unknown Educator"}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-sm text-yellow-600 font-medium">
          {calculateRating(course).toFixed(1)}
        </span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <img 
              key={i} 
              src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} 
              alt="star" 
              className="w-4 h-4"
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">({course.courseRatings.length})</span>
      </div>

      <p className="text-md font-bold text-blue-700">
        {currency}{(course?.coursePrice || 0).toFixed(2)}
      </p>
    </div>
  </Link>
);

}

export default CourseCard