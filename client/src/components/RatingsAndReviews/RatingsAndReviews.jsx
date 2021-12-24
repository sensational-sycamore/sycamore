import React from 'react';
import './RatingsAndReviews.scss';
import Sorting from './Sorting/Sorting.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import WritingReview from './WritingReview/WritingReview.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';

const RatingsAndReviews = ({productId} ) => {
  return (
    <div className='ratings-and-reviews'>
      <ReviewsList productId={productId} />
      <WritingReview productId={productId} />
      <Sorting />
      <RatingBreakdown />
      <ProductBreakdown />
    </div>
  );
};

export default RatingsAndReviews;
