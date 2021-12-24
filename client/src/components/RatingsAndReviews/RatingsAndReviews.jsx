import React from 'react';
import './RatingsAndReviews.scss';
import Sorting from './Sorting/Sorting.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import WritingReview from './WritingReview/WritingReview.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';

const RatingsAndReviews = () => {
  return (
    <div className='ratings-and-reviews'>
      <Sorting />
      <ReviewsList />
      <WritingReview />
      <RatingBreakdown />
      <ProductBreakdown />
    </div>
  );
};

export default RatingsAndReviews;
