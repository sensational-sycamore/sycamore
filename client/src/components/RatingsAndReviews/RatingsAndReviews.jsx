import React from 'react';
import './RatingsAndReviews.scss';
import Sorting from './Sorting/Sorting.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import WritingReview from './WritingReview/WritingReview.jsx';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown.jsx';
import axios from 'axios';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      meta: {},
      showMoreReviewsButton: true,
      productName: 'Camo Onesie'
    };
  }

  componentDidMount() {
    axios.get(`/reviews/?product_id=${this.props.productId}`)
      .then(response => {
        console.log('response from axios get:', response.data.results);

        this.setState({ reviews: response.data.results }, () => {
          if (this.state.reviews.length <= 2) {
            this.setState({ showMoreReviewsButton: false });
          }
        });
      })
      .catch(err => {
        console.log('error');
      });

    axios.get(`/reviews/meta/?product_id=${this.props.productId}`)
      .then(response => {
        console.log('response from axios get meta:', response.data);
        this.setState({ meta: response.data });
      })
      .catch(err => {
        console.log('error');
      });

  }

  render() {
    const { productId } = this.props;
    const {reviews, showMoreReviewsButton, productName} = this.state;

    return (
      <div className='ratings-and-reviews'>
        <ReviewsList productId={productId} reviews={reviews} showMoreReviewsButton={showMoreReviewsButton} />
        <WritingReview productId={productId} productName={productName} />
        <Sorting />
        <RatingBreakdown />
        <ProductBreakdown />
      </div>
    );
  }
}
export default RatingsAndReviews;
