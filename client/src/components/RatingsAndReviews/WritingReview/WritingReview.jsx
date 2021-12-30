import React from 'react';
import ReactDOM from 'react-dom';
import './WritingReview.scss';
import SetStarRating from './SetStarRating.jsx';

class WritingReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'product_id': props.productId,
      rating: 5,
      summary: '',
      body: '',
      recommend: 'yes',
      name: '',
      email: '',
      characteristics: {}
    };
    this.getRating = this.getRating.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getRating(rating) {
    this.setState({ rating });
  }

  handleChange(event) {
    if (event.target.name === 'size' || event.target.name === 'width' ||
    event.target.name === 'comfort' || event.target.name === 'quality'
    ) {
      this.setState({ characteristics: {...this.state.characteristics, [event.target.name]: event.target.value } });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmitReview(event) {
    console.log('this.state:', this.state);
    this.props.handAddReviewsClick(event);
  }

  render() {
    // const { summary, productId } = this.props;
    const { summary, body, name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmitReview}>
        <h4>Write Your Review about </h4>
        {/* <p>about {productId}</p> */}
        <div>
          <p>Overall rating</p>
          <SetStarRating getRating={this.getRating} />
        </div>
        <div onChange={this.handleChange}>
        <p>Do you recommend this product?</p>
          <input type="radio" value='yes' name="recommend" defaultChecked /> Yes
          <input type="radio" value='no' name="recommend" /> No
        </div>
        <div onChange={this.handleChange}>
          <p>Characteristics</p>
          <div>
          <p>Size</p>
          <input type="radio" value='1' name="size" /> A size too small
          <input type="radio" value='2' name="size" /> ½ a size too small
          <input type="radio" value='3' name="size" /> Perfect
          <input type="radio" value='4' name="size" /> ½ a size too big
          <input type="radio" value='5' name="size" /> A size too wide
          <input type="radio" value='0' name="size" defaultChecked /> none
          </div>
          <div>
          <p>Width</p>
          <input type="radio" value='1' name="width" /> Too narrow
          <input type="radio" value='2' name="width" /> Slightly narrow
          <input type="radio" value='3' name="width" /> Perfect
          <input type="radio" value='4' name="width" /> Slightly wide
          <input type="radio" value='5' name="width" /> Too wide
          <input type="radio" value='0' name="width" defaultChecked /> none
          </div>
          <div>
          <p>Comfort</p>
          <input type="radio" value='1' name="comfort" /> Uncomfortable
          <input type="radio" value='2' name="comfort" /> Slightly uncomfortable
          <input type="radio" value='3' name="comfort" /> Ok
          <input type="radio" value='4' name="comfort" /> Comfortable
          <input type="radio" value='5' name="comfort" /> Perfect
          <input type="radio" value='0' name="comfort" defaultChecked /> none
          </div>
          <div>
          <p>Quality</p>
          <input type="radio" value='1' name="quality" /> Poor
          <input type="radio" value='2' name="quality" /> Below average
          <input type="radio" value='3' name="quality" /> What I expected
          <input type="radio" value='4' name="quality" /> Pretty great
          <input type="radio" value='5' name="quality" /> Perfect
          <input type="radio" value='0' name="quality" defaultChecked /> none
          </div>

        </div>
        <div>
        <p>Add a headline</p>
        <textarea
        name='summary'
          value={summary}
          onChange={this.handleChange}
          placeholder="what's most important to know?"
          rows={1}
          cols={50}
        />
      </div>
      <div>
        <p>Add a written review </p>
        <textarea
        name='body'
          value={body}
          onChange={this.handleChange}
          placeholder="what did you like or dislike? what did you use this product for?"
          rows={5}
          cols={50}
        />
      </div>
        <div>
          <label>your nickname:
            <input name='name' type='text' value={name} onChange={this.handleChange} />
          </label>
          </div>
          <div>
          <label>your email:
            <input name='email' type='text' value={email} onChange={this.handleChange} />
          </label>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default WritingReview;
