import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';


const Ratings = ({ reviews }) => {
  const length = reviews.length;
  const total = reviews.reduce((acc, review) => {
    return acc + review.rating;
  }, 0);
  const average = total / length;
  const star = <FontAwesomeIcon icon={faStar} size="xs"/>;
  const halfStar = <FontAwesomeIcon icon={faStarHalf} size="xs"/>;
  const starArr = [];
  const populateStar = () => {
    for (var i = 0; i < Math.floor(average); i++) {
      starArr.push(star);
    }

    if (average % 1 >= 0.5) {
      starArr.push(halfStar);
    }
  };

  populateStar();


  return (
    <div>
      { starArr }
    </div>
  );
};

export default Ratings;
