import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { motion } from 'framer-motion';

const MyCourses = ()=> {

  const {currency,allCourses} = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  const fecthEducatorCourses = async () => {
    setCourses(allCourses)
  }
  useEffect(() => {
    fecthEducatorCourses()
  }, [])


  return courses ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-start justify-start md:p-8 p-4 pt-8 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="w-full">
        <h2 className="pb-6 text-xl font-semibold text-gray-800">📚 My Courses</h2>
        
        <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xl">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-700 border-b border-gray-300 text-sm text-left bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
              </tr>
            </thead>
  
            <tbody className="text-sm text-gray-600">
              {courses.map((course) => (
                <motion.tr
                  key={course._id}
                  whileHover={{ scale: 1.01, backgroundColor: '#f9fafb' }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="border-b border-gray-200"
                >
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img
                      src={course.courseThumbnail}
                      alt="Course"
                      className="w-14 h-14 object-cover rounded-md border"
                    />
                    <span className="truncate hidden md:block font-medium text-gray-700">
                      {course.courseTitle}
                    </span>
                  </td>
  
                  <td className="px-4 py-3 text-green-600 font-semibold">
                    {currency}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
  
                  <td className="px-4 py-3">{course.enrolledStudents.length}</td>
  
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  ) : < Loading/>
}

export default MyCourses