import React from 'react'
import { Routes, Route, useMatch, useLocation } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'
// import your pages
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

import "quill/dist/quill.snow.css";
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut"
};

const App = () => {
  const isEducatorRoute = useMatch('/educator/*');
  const location = useLocation();

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/course-list' element={<CoursesList />} />
            <Route path='/course-list/:input' element={<CoursesList />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path='/my-enrollments' element={<MyEnrollments />} />
            <Route path='/player/:courseId' element={<Player />} />
            <Route path='/loading/:path' element={<Loading />} />

            <Route path='/educator' element={<Educator />} >
              <Route path='/educator' element={<Dashboard />} />
              <Route path='add-course' element={<AddCourse />} />
              <Route path='mycourses' element={<MyCourses />} />
              <Route path='student-enrolled' element={<StudentsEnrolled />} />
            </Route>
            
            
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />
            
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
