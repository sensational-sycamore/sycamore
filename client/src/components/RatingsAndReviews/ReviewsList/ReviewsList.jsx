import React from 'react';
import Modal from 'react-modal';
import './ReviewsList.scss';
import ReviewsListItem from './ReviewsListItem.jsx';
import WritingReview from '../WritingReview/WritingReview.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.productId,
      showAddReviewsForm: false
    };
    this.handMoreReviewsClick = this.handMoreReviewsClick.bind(this);
    this.handleCloseAddReviewsForm = this.handleCloseAddReviewsForm.bind(this);
  }

  handMoreReviewsClick(event) {
    event.preventDefault();
    this.props.getNextPageReviews();
  }

  handleCloseAddReviewsForm(event) {
    event.preventDefault();
    this.setState({ showAddReviewsForm: !this.state.showAddReviewsForm });
  }

  render() {
    const { reviews, productId, characteristics, AddReview, totalNumberRating, showMoreReviewsButton } = this.props;
    const { showAddReviewsForm } = this.state;
    console.log('showMoreReviewsButton from reviewlist:', showMoreReviewsButton);
    return (
      <div className='reviews_section'>
        <h4>{totalNumberRating} reviews, sorted by relevance</h4>
        <div>
          {
            reviews.map((review, index) => <ReviewsListItem review={review} key={review.review_id} />)
          }
        </div>
        <div className='addReviews'>
          {showMoreReviewsButton && <button onClick={this.handMoreReviewsClick} className='review_btn' >MORE REVIEWS</button>}
          <button onClick={this.handleCloseAddReviewsForm} className='review_btn' >ADD A REVIEW  +</button>
          <Modal isOpen={showAddReviewsForm} ariaHideApp={false}>
            <WritingReview handleCloseAddReviewsForm={this.handleCloseAddReviewsForm} productId={productId} characteristics={characteristics} AddReview={AddReview} />
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
