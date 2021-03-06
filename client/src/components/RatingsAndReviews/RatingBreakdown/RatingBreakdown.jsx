import React from 'react';
import './RatingBreakdown.scss';
import RatingBreakdownItem from './RatingBreakdownItem.jsx';
import NumberFormat from 'react-number-format';
import StarRating from '../../Shared/StarRating/StarRating.jsx';

const RatingBreakdown = ({
  meta,
  ratingArray,
  averageRating,
  totalNumberRating,
  percentRecommend
}) => {

  return (
    <>
      <div className='avg-rating'>
        <h2>
          <NumberFormat displayType="text" value={averageRating} decimalScale={1} isNumericString={true} />
        </h2>
        <span className='avg-star'>
          <StarRating averageRating={averageRating} />
        </span>
      </div>
      {ratingArray.length > 0 &&
        ratingArray.map(rating => (
          <RatingBreakdownItem rating={rating} averageRating={averageRating}
            totalNumberRating={totalNumberRating}
            key={rating.level} />
        )
        )
      }
      <div>
        <NumberFormat displayType="text" value={percentRecommend} decimalScale={0} isNumericString={true} />
        <span>% reviews recommend this product</span>
      </div>
    </>
  );
};

export default RatingBreakdown;
