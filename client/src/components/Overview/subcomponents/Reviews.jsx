import React from 'react';
import Ratings from '../../Shared/Ratings.jsx';
import css from '../styles/reviews.modules.css';


const Reviews = ({ reviews }) => {
  return (
    <div className={css.reviewsContainer}>
      <Ratings reviews={reviews} />
      <a className={css.reviewLink} href="#ratings-and-reviews">Read all reviews</a>
    </div>
  );
};

export default Reviews;
