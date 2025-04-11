import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../LMS_assets/assets/assets';
import SearchBar from '../../components/student/SearchBar';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from '../../components/student/CourseCard';
import { all } from 'axios';
import Footer from '../../components/student/Footer';

// const courses = [
//     { title: 'MERN Stack Development', instructor: 'John Doe', price: 'INR49.99', rating: 5, reviews: 1, image: './mern.jpg' },
//     { title: 'Machine Learning with Python', instructor: 'Unknown Educator', price: 'INR79.99', rating: 5, reviews: 1, image: 'python-course.jpg' },
//     { title: 'Hacking Basics', instructor: 'Unknown Educator', price: 'INR69.99', rating: 0, reviews: 0, image: 'cybersecurity-course.jpg' },
//     { title: 'Artificial Intelligence', instructor: 'Unknown Educator', price: 'INR99.99', rating: 0, reviews: 0, image: 'webdev-course.jpg' },
//     { title: 'Data Science Masterclass', instructor: 'Alice Smith', price: 'INR89.99', rating: 4, reviews: 3, image: 'data-science.jpg' },
//     { title: 'Deep Learning with TensorFlow', instructor: 'Bob Brown', price: 'INR109.99', rating: 4.5, reviews: 5, image: 'ml-python.jpg' },
//     { title: 'ReactJS for Beginners', instructor: 'Unknown Educator', price: 'INR79.99', rating: 5, reviews: 2, image: 'react-course.jpg' },
//     { title: 'Artificial Intelligence Basics', instructor: 'John Doe', price: 'INR119.99', rating: 4, reviews: 2, image: 'ai-course.jpg' },
//     { title: 'Cloud Computing Essentials', instructor: 'Cloud Expert', price: 'INR99.99', rating: 3.5, reviews: 1, image: 'cloud-computing.jpg' },
//     { title: 'Full Stack Web Development', instructor: 'Tech Guru', price: 'INR149.99', rating: 5, reviews: 10, image: 'fullstack.jpg' },
//     { title: 'Blockchain Fundamentals', instructor: 'Unknown Educator', price: 'INR79.99', rating: 4.2, reviews: 4, image: 'blockchain.jpg' },
//     { title: 'UI/UX Design Mastery', instructor: 'Design Pro', price: 'INR89.99', rating: 4.7, reviews: 6, image: 'uiux.jpg' },
//     { title: 'Ethical Hacking 101', instructor: 'HackerMan', price: 'INR99.99', rating: 4, reviews: 5, image: 'ethical-hacking.jpg' },
//     { title: 'DevOps Essentials', instructor: 'DevOps Ninja', price: 'INR129.99', rating: 4.5, reviews: 3, image: 'devops.jpg' },
//     { title: 'Mobile App Development', instructor: 'App Creator', price: 'INR119.99', rating: 4.8, reviews: 7, image: 'mobile-dev.jpg' },
// ];

// const Courses = () => {
//     return (
//         <div className='px-8 py-10'>
//             <h2 className='text-3xl font-bold text-gray-800 text-center'>Explore Our Courses</h2>
//             <p className='text-gray-500 text-center mt-2'>Learn from top instructors and industry experts.</p>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
//                 {courses.map((course, index) => (
//                     <div key={index} className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'>
//                         <img className='w-full h-40 object-cover' src={course.image} alt={course.title} />
//                         <div className='p-4'>
//                             <h3 className='text-lg font-semibold text-gray-900'>{course.title}</h3>
//                             <p className='text-gray-600 text-sm'>{course.instructor}</p>
//                             <div className='flex items-center gap-1 mt-2'>
//                                 {[...Array(5)].map((_, i) => (
//                                     <span key={i} className={`text-yellow-500 ${i < Math.floor(course.rating) ? 'opacity-100' : 'opacity-50'}`}>
//                                         ★
//                                     </span>
//                                 ))}
//                                 <span className='text-gray-600 text-sm'>({course.reviews})</span>
//                             </div>
//                             <p className='text-blue-600 font-semibold mt-3'>{course.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
const CoursesList = () => {
    const {navigate, allCourses} = useContext(AppContext);
    const {input} = useParams();
    const [filteredCourse, setFilteredCourse] = useState([])

    useEffect(() => {
        if(allCourses && allCourses.length > 0){
            const tempCourses = allCourses.slice()

            input ? 
                setFilteredCourse(
                    tempCourses.filter(
                        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
                    )
                )
            : setFilteredCourse(tempCourses)
        }
    },[allCourses, input])
return(
    <>
        <div className='relative md:px-36 px-8 pt-20 text-left'>
            <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
                <div>
                    <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
                    <p className='text-gray-600'>
                        <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home </span>/ <span>Course List</span></p>
                </div>
                <SearchBar data={input}/>
            </div>
        { input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 border-gray-300 rounded-lg'>
            <p>{input}</p>
            <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={() => navigate('/course-list')}/>
        </div>

        }


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
                {filteredCourse.map((course, index)=> <CourseCard key={index} course={course}/>)}
            </div>
        </div>
        <Footer/>
    </>
)
}
export default CoursesList