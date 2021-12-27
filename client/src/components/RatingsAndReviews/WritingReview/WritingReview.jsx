import React from 'react';
import './WritingReview.scss';

class WritingReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }


  render() {
    const { reviews, productId } = this.props;
    const { indexNum, showMoreReviewsButton } = this.state;

    return (
      <form>
        

      </form>
    );
  }
}


export default WritingReview;
