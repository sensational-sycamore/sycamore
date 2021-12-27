import React, { useState } from 'react';
import './StarRating.scss';
import { FaStar } from 'react-icons/fa';


class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { averageRating } = this.props;
    console.log('aveage rating from star rating:', averageRating);
    if (averageRating >= 0) {
      return (
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar className="star" color={ratingValue <= averageRating ? '#ffc107' : '#e4e5e9'} size={20}
                key={i}
              />
            );
          })}
        </div>
      );
    }
  }
}
export default StarRating;