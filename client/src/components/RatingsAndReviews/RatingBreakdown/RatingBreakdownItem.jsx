import React from 'react';
import './RatingBreakdownItem.scss';
import NumberFormat from 'react-number-format';

const RatingBreakdownItem = ({
  rating,
  averageRating,
  totalNumberRating
}) => {

  return (
    <div>
      <div>
        <a href='#' className='starlevel' >{rating.level} star   </a>
        <progress className='progress' max="100" value={rating.percentRating} />
        <span className='starnumber'>
          <NumberFormat displayType="text" value={rating.percentRating} decimalScale={0} isNumericString={true} />
          %</span>
      </div>
    </div>
  );
};

export default RatingBreakdownItem;
