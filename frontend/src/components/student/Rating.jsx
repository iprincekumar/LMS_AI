import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1
        return (
          <label key={index} className="cursor-pointer transition-transform transform hover:scale-110">
            <input
              type="radio"
              name="rating"
              value={starValue}
              className="hidden"
              onClick={() => setRating(starValue)}
            />
            <FaStar
              size={28}
              className={`transition-colors duration-300 ${
                starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
    </div>
  )
}

export default Rating
