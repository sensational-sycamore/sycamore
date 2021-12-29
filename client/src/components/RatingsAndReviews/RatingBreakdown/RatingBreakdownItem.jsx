import React from 'react';
import './RatingBreakdownItem.scss';
import NumberFormat from 'react-number-format';

class RatingBreakdownItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let rating = Number(event.target.innerText[0]);
    console.log(rating);
    this.props.filterReviews(rating);
  }

  render() {
    const { rating, averageRating, totalNumberRating } = this.props;
    return (
      <div>
        <div>
          <a href='#' className='starlevel' onClick={this.handleClick} >{rating.level} star   </a>
          <progress className='progress' max="100" value={rating.percentRating} />
          <span className='starnumber'>
            <NumberFormat displayType="text" value={rating.percentRating} decimalScale={0} isNumericString={true} />
            %</span>
        </div>

      </div>

    );
  }
}
export default RatingBreakdownItem;
