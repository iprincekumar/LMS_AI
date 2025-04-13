import React, { useState, useEffect } from 'react'
import { assets, dummyStudentEnrolled } from '../../LMS_assets/assets/assets'
import Loading from '../../components/student/Loading'
import { motion } from 'framer-motion';

const StudentsEnrolled=()=> {

  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(()=>{
    fetchEnrolledStudents()
  },[])


  return enrolledStudents ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-start md:p-8 p-4 pt-8 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-5xl w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg">
        <h2 className="text-xl font-semibold px-6 pt-6 pb-2 text-gray-800">👥 Enrolled Students</h2>
        <table className="table-auto w-full text-sm">
          <thead className="text-gray-700 bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-6 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-6 py-3 font-semibold text-left">Student Name</th>
              <th className="px-6 py-3 font-semibold text-left">Course Title</th>
              <th className="px-6 py-3 font-semibold text-left hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {enrolledStudents.map((item, index) => (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.01, backgroundColor: '#f9f9f9' }}
                className="border-b border-gray-100"
              >
                <td className="px-6 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                <td className="px-6 py-3 flex items-center space-x-3">
                  <img
                    src={item.student.imageUrl}
                    alt="student"
                    className="w-9 h-9 rounded-full border shadow-sm object-cover"
                  />
                  <span className="font-medium truncate">{item.student.name}</span>
                </td>
                <td className="px-6 py-3 truncate">{item.courseTitle}</td>
                <td className="px-6 py-3 hidden sm:table-cell">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-right text-xs text-gray-400">
          Total Students: {enrolledStudents.length}
        </div>
      </div>
    </motion.div>
  ) : <Loading />
}

export default StudentsEnrolled