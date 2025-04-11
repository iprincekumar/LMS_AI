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


  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 lg:px-24 py-4 border-b border-gray-900 ${isCourseList ? 'bg-white' : 'bg-cyan-500/80'}`}>
        <img onClick={()=> navigate ('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-50' />
        {/* for phones */}
        <div className='hidden md:flex items-center gap-4 text-black-500'>
            <div>
                { user &&
                <>
                    <button onClick={()=>(navigate('/educator'))} >{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
                 | <Link to='/my-enrollments'>My Enrollments</Link>
                </>
                }
            </div>
            { 
                user ? <UserButton /> : <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Register</button>
            }
        </div>
        {/* for tablets
        <div className='md:hidden flex items-center gap-4 text-gray-500'>
            <div>
                <button>Become Educator</button>
                | <Link to='/my-enrollments'>My Enrollments</Link>
            </div>
            <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Register</button>
        </div>
        <div className='md:hidden flex items-center gap-4 text-gray-500'>

        </div> */}
        {/* for phones */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
            <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
            { user &&
                <>
                    <button onClick={()=>(navigate('/educator'))} >{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
                | <Link to='/my-enrollments'>My Enrollments</Link>
                </>
                }
            </div>
            {
                user ? <UserButton /> : <button onClick={()=>openSignIn()}><img src={assets.user_icon} /></button>
            }
        </div>
    </div>
  )
}

export default Navbar