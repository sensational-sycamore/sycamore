import React, { useState } from 'react';
import './SetStarRating.scss';
import { FaStar } from 'react-icons/fa';

class SetStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      hover: null
    };
    this.handleSetStarClick = this.handleSetStarClick.bind(this);
  }

  handleSetStarClick(event) {
    event.preventDefault();
    this.setState({rating: event.target.value});
    this.props.getRating(event.target.value * 1);
  }

  render() {
    return (<div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input className='star_radio'
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={this.handleSetStarClick}
              onChange={() => this.setState({rating: ratingValue})}
            />
            <FaStar className="star" color={ratingValue <= (this.state.hover || this.state.rating) ? '#ffc107' : '#e4e5e9'} size={20}
              onMouseEnter={() => this.setState({hover: ratingValue})}
              onMouseLeave={() => this.setState({hover: null})}
            />
          </label>
        );
      })}
    </div>);
  }
}

export default SetStarRating;
