import React, { useContext } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { assets } from '../../LMS_assets/assets/assets';
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar=()=> {
    const location = useLocation();//
    const {navigate, isEducator} = useContext(AppContext);
    const isCourseList= location.pathname.includes('/course-list');

    const {openSignIn}=useClerk();
    const {user}=useUser();


//   return (
//     <div className={`flex items-center justify-between px-4 sm:px-10 lg:px-24 py-4 border-b border-gray-900 ${isCourseList ? 'bg-white' : 'bg-cyan-500/80'}`}>
//         <img onClick={()=> navigate ('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-50' />
//         {/* for phones */}
//         <div className='hidden md:flex items-center gap-4 text-black-500'>
//             <div>
//                 { user &&
//                 <>
//                     <button onClick={()=>(navigate('/educator'))} >{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
//                  | <Link to='/my-enrollments'>My Enrollments</Link>
//                 </>
//                 }
//             </div>
//             { 
//                 user ? <UserButton /> : <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Register</button>
//             }
//         </div>
//         {/* for tablets
//         <div className='md:hidden flex items-center gap-4 text-gray-500'>
//             <div>
//                 <button>Become Educator</button>
//                 | <Link to='/my-enrollments'>My Enrollments</Link>
//             </div>
//             <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Register</button>
//         </div>
//         <div className='md:hidden flex items-center gap-4 text-gray-500'>

//         </div> */}
//         {/* for phones */}
//         <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
//             <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
//             { user &&
//                 <>
//                     <button onClick={()=>(navigate('/educator'))} >{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
//                 | <Link to='/my-enrollments'>My Enrollments</Link>
//                 </>
//                 }
//             </div>
//             {
//                 user ? <UserButton /> : <button onClick={()=>openSignIn()}><img src={assets.user_icon} /></button>
//             }
//         </div>
//     </div>
//   )

return (
    <div className={`flex items-center justify-between px-4 sm:px-10 lg:px-24 py-4 border-b border-gray-900 transition-all duration-300 ${isCourseList ? 'bg-white' : 'bg-cyan-500/80'}`}>
      
      {/* Logo */}
      <img 
        onClick={() => navigate('/')} 
        src={assets.logo} 
        alt="Logo" 
        className="w-28 lg:w-50 cursor-pointer hover:scale-105 transition-transform duration-300"
      />
  
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-black">
        {user && (
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/educator')} 
              className="hover:text-blue-700 transition duration-200 hover:underline"
            >
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <span className="text-gray-400">|</span>
            <Link 
              to="/my-enrollments" 
              className="hover:text-blue-700 transition duration-200 hover:underline"
            >
              My Enrollments
            </Link>
          </div>
        )}
        {
          user 
            ? <UserButton /> 
            : <button 
                onClick={openSignIn} 
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Register
              </button>
        }
      </div>
  
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3 text-gray-700 text-sm">
        {user && (
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/educator')} 
              className="hover:text-blue-600 transition hover:underline"
            >
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <span className="text-gray-400">|</span>
            <Link 
              to="/my-enrollments" 
              className="hover:text-blue-600 transition hover:underline"
            >
              My Enrollments
            </Link>
          </div>
        )}
        {
          user 
            ? <UserButton /> 
            : <button 
                onClick={openSignIn} 
                className="hover:scale-110 transition duration-300"
              >
                <img 
                  src={assets.user_icon} 
                  alt="User Icon" 
                  className="w-6 h-6" 
                />
              </button>
        }
      </div>
    </div>
  );
  
}

export default Navbar