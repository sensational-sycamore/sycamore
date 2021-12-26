import React from 'react';
import './RatingBreakdownItem.scss';

class RatingBreakdownItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rating, averageRating, totalNumberRating } = this.props;


    return (
      <div>

        <div>
          <label htmlFor="">{rating.level} star:   </label>
          <progress max="100" value={rating.percentRating} />
        </div>

      </div>

    );
  }
}
export default RatingBreakdownItem;