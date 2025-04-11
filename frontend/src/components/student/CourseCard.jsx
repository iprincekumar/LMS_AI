import React, { useContext } from 'react'
import { assets } from '../../LMS_assets/assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard=({course})=> {

const {currency, calculateRating} = useContext(AppContext)
  return (
    <Link to={'/course/'+course._id} onClick={()=> scrollTo(0,0)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
        <img className='w-full' src={course?.courseThumbnail || "default-image.jpg"} alt="course" />
        <div className='p-3 text-left'>
            <h3 className='text-based font-semibold'>{course?.courseTitle || "Untitled Course"}</h3>
            <p className='text-gray-500'>{course?.educator?.name || "Unknown Educator"}</p>
            <div className='flex items-center space-x-2'>
                <p>{calculateRating(course)}</p>
                <div className='flex'>
                    {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt=" "className='w-3.5 h-3.5'/>
                        ))}
                </div>
                <p className='text-gray-500'>{course.courseRatings.length}</p>
            </div>
            {/* <p>{currency}{(course?.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p> */}
            <p className='text-based font-semibold text-gray-800'>{currency}{(course?.coursePrice || 0).toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default CourseCard