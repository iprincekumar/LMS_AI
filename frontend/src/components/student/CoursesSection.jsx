import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";



const CoursesSection = () => {

const {allCourses} = useContext(AppContext);
return (
  <div className="py-16 md:px-40 px-6 flex flex-col items-center bg-white">
    <h2 className="text-3xl font-semibold text-gray-800 text-center">
      🚀 Explore & Elevate Your Skills
    </h2>
    <p className="text-sm md:text-base text-gray-500 mt-3 text-center max-w-xl">
      Handpicked courses designed to fuel your success. Learn, grow, and lead!
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full">
      {allCourses.slice(0, 4).map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>

    <Link 
      to="/course-list" 
      onClick={() => scrollTo(0, 0)}
      className="mt-10 inline-block border border-gray-500 text-gray-600 px-8 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white"
    >
      Explore Courses
    </Link>
  </div>
);

}

export default CoursesSection;
