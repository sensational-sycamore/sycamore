import React from 'react';
import './ReviewsList.scss';
import data from '../dummy_data.js';
import ReviewsListItem from './ReviewsListItem.jsx';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.productId,
      indexNum: 2,
      showMoreReviewsButton: props.showMoreReviewsButton
    };
    this.handMoreReviewsClick = this.handMoreReviewsClick.bind(this);
  }


  handMoreReviewsClick() {
    const {reviews} = this.props;
    const { indexNum, showMoreReviewsButton} = this.state;
    let newIndex = indexNum + 2;
    if (newIndex >= reviews.length) {
      this.setState({ showMoreReviewsButton: false });
      newIndex = reviews.length;
    }
    this.setState({ indexNum: newIndex});
  }

  render() {
    const { reviews, productId } = this.props;
    const { indexNum, showMoreReviewsButton } = this.state;

    return (
      <div>
        {reviews.map((review, index) => {
          if (index < indexNum) {
            return <ReviewsListItem review={review} key={review.review_id} />;
          }
        })}
        {showMoreReviewsButton && <button onClick={this.handMoreReviewsClick}>MORE REVIEWS</button>}
        <button>ADD A REVIEW</button>

      </div>
    );
  }
}


export default ReviewsList;
