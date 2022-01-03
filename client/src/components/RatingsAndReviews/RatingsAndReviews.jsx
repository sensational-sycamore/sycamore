import React from 'react';
import './RatingsAndReviews.scss';
import Sorting from './Sorting/Sorting.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
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
      numStarReviewsToRender: [],
      page: 1
    };
    this.calcRating = this.calcRating.bind(this);
    this.AddReview = this.AddReview.bind(this);
    this.getNextPageReviews = this.getNextPageReviews.bind(this);
    this.getMeta = this.getMeta.bind(this);
  }

  getMeta(id) {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then(response => {
        console.log('response from axios get meta:', response.data);
        this.setState({ meta: response.data }, () => this.calcRating(this.state.meta));
      })
      .catch(err => {
        console.log('error');
      });
  }

  componentDidMount() {
    axios.get(`/reviews/?product_id=${this.props.productId}`,
      {
        params: {
          count: 2,
          page: this.state.page
        }
      })
      .then(response => {
        this.setState({ reviews: response.data.results });
      })
      .catch(err => {
        console.log('error');
      });
    this.getMeta(this.props.productId);
  }

  AddReview(review) {
    const {productId} = this.props;
    axios.post('/reviews', review)
      .then((response) => {
        console.log('success', response.data);
        this.getMeta(productId);
      })
      .catch(err => {
        console.log('err from add review:', err);
      });
  }

  getNextPageReviews() {
    let p = this.state.page + 1;
    this.setState({ page: p });
    axios.get(`/reviews/?product_id=${this.props.productId}`,
      {
        params: {
          count: 2,
          page: p
        }
      })
      .then(response => {
        let newReviews = [...response.data.results, ...this.state.reviews];
        this.setState({ reviews: this.state.reviews.length === 0 ? response.data.results : [...response.data.results, ...this.state.reviews] }, () => {
          if (this.state.reviews.length >= this.state.totalNumberRating) {
            this.setState({ showMoreReviewsButton: false });
          }
        });
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
      const averageRating = parseFloat(totalScore / totalNumberRating).toFixed(1);
      console.log('averageRating from ratingandreviews:', averageRating);
      this.setState({ averageRating: averageRating });
      this.setState({ totalNumberRating: totalNumberRating });
      if (totalNumberRating <= 2 || this.state.reviews.length >= totalNumberRating) {
        this.setState({ showMoreReviewsButton: false });
      }
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

  render() {
    const { productId } = this.props;
    const { reviews, showMoreReviewsButton, meta, averageRating, ratingArray, totalNumberRating, percentRecommend } = this.state;
    return (
      <div id='ratings-and-reviews' className='ratings-and-reviews'>
        <h4>RATINGS AND REVIEWS</h4>
        <div className='box'>
          <div className='rating_box'>
            <RatingBreakdown productId={productId} meta={meta} averageRating={averageRating} ratingArray={ratingArray} totalNumberRating={totalNumberRating}
              percentRecommend={percentRecommend}
            />
          </div>
          <div className='reviewlist_box'>
            <ReviewsList productId={productId} reviews={reviews} showMoreReviewsButton={showMoreReviewsButton} characteristics={meta.characteristics} AddReview={this.AddReview} totalNumberRating={totalNumberRating} getNextPageReviews={this.getNextPageReviews} />
          </div>
        </div>
        {/* <ProductBreakdown /> */}
        {/* <Sorting /> */}
      </div>
    );
  }
}

export default RatingsAndReviews;
