import React from 'react';
import './ReviewsListItem.scss';
const moment = require('moment');


class ReviewsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <div>
          <span>{review.review_id} </span>
          <span>rating:{review.rating} </span>

          <span>{moment(review.date).format('MM/DD/YYYY')} </span>
        </div>
        <div>{review.summary}</div>
        <div>{review.body}</div>
        {review.recommend && <div>I recommend this product</div> }
        <div>{review.reviewer_name} </div>
        {review.response !== null && <div>review.response:{review.response}</div>}
        <div>
          <span>Helpful? Yes({review.helpfulness})</span>
          <span> | Report </span>
        </div>
      </div>
    );
  }
}


export default ReviewsListItem;
