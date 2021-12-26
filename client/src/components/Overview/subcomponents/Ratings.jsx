import React from 'react';

const Ratings = ({ reviews }) => {
  const length = reviews.length;
  const total = reviews.reduce((acc, review) => {
    return acc + review.rating;
  }, 0);
  const average = total / length;

  return (
    <div>
      <div>rating: {average}</div>
    </div>
  );
};

export default Ratings;