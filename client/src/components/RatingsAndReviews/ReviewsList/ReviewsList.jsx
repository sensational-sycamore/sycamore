import React from 'react';
import './ReviewsList.scss';
import data from '../dummy_data.js';
import ReviewsListItem from './ReviewsListItem.jsx';
import WritingReview from '../WritingReview/WritingReview.jsx';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.productId,
      indexNum: 2,
      showMoreReviewsButton: props.showMoreReviewsButton,
      showAddReviewsForm: false
    };
    this.handMoreReviewsClick = this.handMoreReviewsClick.bind(this);
    this.handAddReviewsClick = this.handAddReviewsClick.bind(this);
  }


  handMoreReviewsClick(event) {
    event.preventDefault();
    const { reviews } = this.props;
    const { indexNum, showMoreReviewsButton } = this.state;
    let newIndex = indexNum + 2;
    if (newIndex >= reviews.length) {
      this.setState({ showMoreReviewsButton: false });
      newIndex = reviews.length;
    }
    this.setState({ indexNum: newIndex });
  }

  handAddReviewsClick(event) {
    event.preventDefault();
    this.setState({ showAddReviewsForm: true });
  }

  render() {
    const { reviews, productId } = this.props;
    const { indexNum, showMoreReviewsButton, showAddReviewsForm } = this.state;
    const len = reviews.length;
    return (
      <div className='reviews_section'>
        <h4>{len} reviews, sorted by relevance</h4>
        <div>
          {reviews.map((review, index) => {
            if (index < indexNum) {
              return <ReviewsListItem review={review} key={review.review_id} />;
            }
          })}
        </div>
        <div className='addReviews'>
          {showMoreReviewsButton && <button onClick={this.handMoreReviewsClick}>MORE REVIEWS</button>}
          <button onClick={this.handAddReviewsClick}>ADD A REVIEW</button>
          {showAddReviewsForm && <WritingReview />}
        </div>
      </div>
    );
  }
}


export default ReviewsList;
