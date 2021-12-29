import React from 'react';
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
    if (event.target.name === '14') {
      this.setState({ characteristics: {...this.state.characteristics, [event.target.name]: event.target.value } });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmitReview(event) {
    event.preventDefault();
    console.log('this.state:', this.state);
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
          <input type="radio" value='1' name="14" /> A size too small
          <input type="radio" value='2' name="14" /> ½ a size too small
          <input type="radio" value='3' name="14" /> Perfect
          <input type="radio" value='4' name="14" /> ½ a size too big
          <input type="radio" value='5' name="14" /> A size too wide
          <input type="radio" value='0' name="14" defaultChecked /> none
          </div>
          <div>
          <p>Width</p>
          <input type="radio" value='1' name="15" /> Too narrow
          <input type="radio" value='2' name="15" /> Slightly narrow
          <input type="radio" value='3' name="15" /> Perfect
          <input type="radio" value='4' name="15" /> Slightly wide
          <input type="radio" value='5' name="15" /> Too wide
          <input type="radio" value='0' name="15" defaultChecked /> none
          </div>
          <div>
          <p>Comfort</p>
          <input type="radio" value='1' name="16" /> Uncomfortable
          <input type="radio" value='2' name="16" /> Slightly uncomfortable
          <input type="radio" value='3' name="16" /> Ok
          <input type="radio" value='4' name="16" /> Comfortable
          <input type="radio" value='5' name="16" /> Perfect
          <input type="radio" value='0' name="16" defaultChecked /> none
          </div>
          <div>
          <p>Quality</p>
          <input type="radio" value='1' name="17" /> Poor
          <input type="radio" value='2' name="17" /> Below average
          <input type="radio" value='3' name="17" /> What I expected
          <input type="radio" value='4' name="17" /> Pretty great
          <input type="radio" value='5' name="17" /> Perfect
          <input type="radio" value='0' name="17" defaultChecked /> none
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
