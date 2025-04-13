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
  <form 
    onSubmit={onSearchHandler} 
    className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-300 rounded shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-300"
  >
    {/* Search Icon */}
    <img 
      src={assets.search_icon} 
      alt="search-icon" 
      className="md:w-auto w-10 px-3 cursor-pointer hover:scale-110 transition-transform duration-200" 
    />

    {/* Input Field */}
    <input 
      onChange={e => setInput(e.target.value)} 
      value={input}
      type="text" 
      placeholder="Search for a course"
      className="w-full h-full outline-none text-gray-700 placeholder:text-gray-400 px-2 focus:placeholder:text-gray-300 transition-all duration-200"
    />

    {/* Search Button */}
    <button 
      type="submit" 
      className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded text-white md:px-10 px-7 md:py-2 py-1 mx-1"
    >
      Search
    </button>
  </form>
);

}

export default SearchBar