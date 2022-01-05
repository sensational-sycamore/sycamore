import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';

const Ratings = ({ reviews }) => {
  const length = reviews.length;
  const total = reviews.reduce((acc, review) => {
    return acc + review.rating;
  }, 0);
  const average = total / length;
  const starArr = [];
  const populateStar = () => {
    let id = 0;
    for (var i = 0; i < Math.floor(average); i++) {
      starArr.push(<span key={uniqid()}><FontAwesomeIcon key={id} icon={faStar} size="xs"/></span>);
      id++;
    }

    if (average % 1 >= 0.5) {
      starArr.push(<span key={uniqid()}><FontAwesomeIcon key={id} icon={faStarHalf} size="xs"/></span>);
      id++;
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
