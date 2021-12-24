import React from 'react';
import './ReviewsList.scss';
import data from '../dummy_data.js';
import ReviewsListItem from './ReviewsListItem.jsx';
import axios from 'axios';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.productId,
      reviews: [],
      meta: {}
    };
  }

  componentDidMount() {
    axios.get(`/reviews/?product_id=${this.props.productId}`)
      .then(response => {
        console.log('response from axios get:', response.data.results);
        this.setState({ reviews: response.data.results });
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
    const { reviews } = this.state;

    return (
      <div>
        {reviews.map(review => (
          <ReviewsListItem review={review} key={review.review_id} />
        ))}

      </div>
    );
  }
}


export default ReviewsList;
