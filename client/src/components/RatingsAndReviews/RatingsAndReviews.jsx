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
      averageRating: 0,
      totalNumberRating: 0,
      percentRecommend: 0,
      ratingArray: [],
      numStarReviewsToRender: []
    };
    this.calcRating = this.calcRating.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
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
        this.setState({ meta: response.data }, () => this.calcRating.bind(this)(this.state.meta));
      })
      .catch(err => {
        console.log('error');
      });

  }

  calcRating(meta) {
    let averageRating = 0;

    if (meta.ratings !== undefined) {
      const rating = meta.ratings;
      let totalNumberRating = 0;
      let totalScore = 0;
      for (let key in rating) {
        totalNumberRating += Number(rating[key]);
        totalScore += Number(rating[key]) * Number(key);
      }
      const averageRating = totalScore / totalNumberRating;
      this.setState({ averageRating: averageRating });
      this.setState({ totalNumberRating: totalNumberRating });
      let ratingArray = [];
      for (let i = 5; i >= 1; i--) {
        let obj = {
          'level': i,
          'numberRating': rating[i] ? Number(rating[i]) : 0,
          'percentRating': rating[i] ? 100 * Number(rating[i]) / totalNumberRating : 0
        };
        ratingArray.push(obj);
      }
      this.setState({ ratingArray: ratingArray });
      const recommend = meta.recommended;
      const percentRecommend = (Number(recommend.true) + Number(recommend.false)) > 0 ? 100 * Number(recommend.true) / (Number(recommend.true) + Number(recommend.false)) : 0;
      this.setState({ percentRecommend: percentRecommend });
    }
  }

  filterReviews(rating) {
    let { numStarReviewsToRender } = this.state;
    if (numStarReviewsToRender.length === 0) {
      numStarReviewsToRender.push(rating);
      this.setState({ numStarReviewsToRender: numStarReviewsToRender });
    } else {
      if (numStarReviewsToRender.indexOf(rating) !== -1) {
        if (numStarReviewsToRender.length === 1) {
          this.setState({ numStarReviewsToRender: [] });
        } else {
          let idx = numStarReviewsToRender.indexOf(rating);
          numStarReviewsToRender.splice(idx, 1);
          this.setState({ numStarReviewsToRender: numStarReviewsToRender });
        }
      } else {
        numStarReviewsToRender.push(rating);
        this.setState({ numStarReviewsToRender: numStarReviewsToRender });
      }
    }
  }


  render() {
    const { productId } = this.props;
    const { reviews, showMoreReviewsButton, meta, averageRating, ratingArray, totalNumberRating, percentRecommend } = this.state;

    return (
      <div className='ratings-and-reviews'>
        <h4>RATINGS AND REVIEWS</h4>
        <div className='rowC'>
          <RatingBreakdown productId={productId} meta={meta} averageRating={averageRating} ratingArray={ratingArray} totalNumberRating={totalNumberRating}
            percentRecommend={percentRecommend}
            filterReviews={this.filterReviews}
          />
          <ReviewsList productId={productId} reviews={reviews} showMoreReviewsButton={showMoreReviewsButton} />
        </div>
        <WritingReview productId={productId} />
        {/* <ProductBreakdown /> */}
        {/* <Sorting /> */}
      </div>
    );
  }
}
export default RatingsAndReviews;
