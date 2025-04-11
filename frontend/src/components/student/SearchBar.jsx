import React, { useState } from 'react'
import { assets } from '../../LMS_assets/assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data})=> {

    const navigate = useNavigate();
    const [input, setInput]= useState(data ? data : '')

    const onSearchHandler = (e)=>{
        e.preventDefault()
        navigate('/course-list/' + input)
}

  return (
    
        <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-300 rounded'>
            <img src={assets.search_icon} alt="search-icon" className='md:w-auto w-10 px-3 cursor-pointer'/>
            <input onChange={e => setInput(e.target.value)} value={input}
            type="text" placeholder='Search for a course' className='w-full h-full outline-none text-gray-500/800'></input>
            <button type="submit" className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-2 py-1 mx-1'>Search</button>
        </form>
  )
}

export default SearchBar