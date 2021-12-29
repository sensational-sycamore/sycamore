import React from 'react';
import './ReviewsListItem.scss';
const moment = require('moment');
import StarRating from '../RatingBreakdown/StarRating.jsx';

class ReviewsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { review } = this.props;

    return (
      <div className='review_list'>
        <div className='reviewer_name'>
          <span><StarRating averageRating={review.rating} /></span>
          <span>{review.reviewer_name} </span>
          <span>{moment(review.date).format('MM/DD/YYYY')} </span>
        </div>

        <h4>{review.summary}</h4>
        <p>{review.body}</p>
        {review.recommend && <p>I recommend this product</p>}
        {review.response !== null && <div>review.response:{review.response}</div>}
        <div className='reviewer_helpful'>
          <span>Helpful? Yes({review.helpfulness})</span>
          <span> | Report </span>
        </div>
      </div>
    );
  }
}

export default ReviewsListItem;
