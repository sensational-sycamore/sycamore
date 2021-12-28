import React, { useState } from 'react';
import './SetStarRating.scss';
import { FaStar } from 'react-icons/fa';

const SetStarRating = () => {
  
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleSetStarClick = (event) => {
    // setRating(ratingValue);
    console.log('seting rating:', rating);
  };

  return <div>
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1;
      return (
        <label>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={()=>setRating(ratingValue)}
            // onClick={() => setRating(ratingValue)}
          />
          <FaStar className="star" color={ratingValue <=(hover || rating) ? '#ffc107' : '#e4e5e9'} size={20}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        </label>
      );
    })}
  </div>;
};

export default SetStarRating;
