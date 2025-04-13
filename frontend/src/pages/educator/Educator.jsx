import React from 'react'
import {Outlet} from 'react-router-dom'
import { motion } from 'framer-motion';
import Navbar from '../../components/educator/Navbar'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'

const Educator = ()=> {
  return (
    <div className="text-default min-h-screen bg-gradient-to-br from-white to-blue-50">
      <header className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        <aside className="w-64 hidden md:block sticky top-16 h-full shadow-md">
          <Sidebar />
        </aside>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl min-h-[75vh]"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>

      <footer className="mt-10 bg-white shadow-inner py-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default Educator