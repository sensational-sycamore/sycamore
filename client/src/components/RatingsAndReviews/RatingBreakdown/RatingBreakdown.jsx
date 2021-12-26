import React from 'react';
import './RatingBreakdown.scss';
import RatingBreakdownItem from './RatingBreakdownItem.jsx';
import NumberFormat from 'react-number-format';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { meta, ratingArray, averageRating, totalNumberRating, percentRecommend } = this.props;
    console.log('ratingArray from breakdown:', ratingArray);

    return (
      <div>
        <h2>average rating is:
          <NumberFormat displayType="text" value={averageRating} decimalScale={1} isNumericString={true} />

        </h2>
        {ratingArray.length > 0 &&
          ratingArray.map(rating => (
            <RatingBreakdownItem rating={rating} averageRating={averageRating}
              totalNumberRating={totalNumberRating}
              key={rating.level} />
          )
          )
        }
        <div>
          <NumberFormat displayType="text" value={percentRecommend} decimalScale={0} isNumericString={true} />
          <span>% reviews recommend this product</span>
        </div>
      </div>
    );
  }
}
export default RatingBreakdown;
