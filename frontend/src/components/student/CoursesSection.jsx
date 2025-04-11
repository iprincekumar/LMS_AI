import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";



const CoursesSection = () => {

const {allCourses} = useContext(AppContext);
  return (
    <div className="py-16 md:px-40 px-8 flex flex-col items-center" >
      <h2 className="text-3xl font-medium text-gray-800">🚀 Explore & Elevate Your Skills</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
      Handpicked courses designed to fuel your success. Learn, grow, and lead!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">{allCourses.slice(0, 4).map((course, index) => (<CourseCard key={index} course={course} />
        ))}
    </div>

      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded color-white hover:bg-gray-500 hover:text-white mt-5 align-center'>Explore Courses</Link>
    </div>
  )
}

export default CoursesSection;
