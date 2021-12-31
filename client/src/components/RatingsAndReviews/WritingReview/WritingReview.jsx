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
      recommend: true,
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
    // console.log('event.target.name from size:', event.target.name === this.props.characteristics.Size.id.toString());
    if (
      // event.target.name === this.props.characteristics.Size.id.toString() ||
    // event.target.name === this.props.characteristics.Width.id.toString() ||
    event.target.name === this.props.characteristics.Comfort.id.toString() ||
    event.target.name === this.props.characteristics.Quality.id.toString()
    ) {
      this.setState({ characteristics: {...this.state.characteristics, [event.target.name]: event.target.value } });
    }
    else if (event.target.name === 'recommend') {
      this.setState({ [event.target.name]: event.target.value==='yes'? true: false });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmitReview(event) {
    console.log('this.state:', this.state);
    this.props.handAddReviewsClick(event);
  }

  render() {
    const chars = this.props.characteristics;
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
          <input type="radio" value='1' name={`${chars.Size.id}`} /> A size too small
          <input type="radio" value='2' name={`${chars.Size.id}`} /> ½ a size too small
          <input type="radio" value='3' name={`${chars.Size.id}`} /> Perfect
          <input type="radio" value='4' name={`${chars.Size.id}`} /> ½ a size too big
          <input type="radio" value='5' name={`${chars.Size.id}`} /> A size too wide
          <input type="radio" value='0' name={`${chars.Size.id}`} defaultChecked /> none
          </div>
          <div>
          <p>Width</p>
          <input type="radio" value='1' name={`${chars.Width.id}`} /> Too narrow
          <input type="radio" value='2' name={`${chars.Width.id}`} /> Slightly narrow
          <input type="radio" value='3' name={`${chars.Width.id}`} /> Perfect
          <input type="radio" value='4' name={`${chars.Width.id}`} /> Slightly wide
          <input type="radio" value='5' name={`${chars.Width.id}`} /> Too wide
          <input type="radio" value='0' name={`${chars.Width.id}`} defaultChecked /> none
          </div>
          <div>
          <p>Comfort</p>
          <input type="radio" value='1' name={`${chars.Comfort.id}`} /> Uncomfortable
          <input type="radio" value='2' name={`${chars.Comfort.id}`} /> Slightly uncomfortable
          <input type="radio" value='3' name={`${chars.Comfort.id}`} /> Ok
          <input type="radio" value='4' name={`${chars.Comfort.id}`} /> Comfortable
          <input type="radio" value='5' name={`${chars.Comfort.id}`} /> Perfect
          <input type="radio" value='0' name={`${chars.Comfort.id}`} defaultChecked /> none
          </div>
          <div>
          <p>Quality</p>
          <input type="radio" value='1' name={`${chars.Quality.id}`} /> Poor
          <input type="radio" value='2' name={`${chars.Quality.id}`}/> Below average
          <input type="radio" value='3' name={`${chars.Quality.id}`} /> What I expected
          <input type="radio" value='4' name={`${chars.Quality.id}`} /> Pretty great
          <input type="radio" value='5' name={`${chars.Quality.id}`} /> Perfect
          <input type="radio" value='0' name={`${chars.Quality.id}`} defaultChecked /> none
          </div>
          <div>
          <p>Length</p>
          <input type="radio" value='1' name={`${chars.Length.id}`} /> Runs Short
          <input type="radio" value='2' name={`${chars.Length.id}`} /> Runs slightly short
          <input type="radio" value='3' name={`${chars.Length.id}`} /> Perfect
          <input type="radio" value='4' name={`${chars.Length.id}`} /> Runs slightly long
          <input type="radio" value='5' name={`${chars.Length.id}`} /> Runs long
          <input type="radio" value='0' name={`${chars.Length.id}`} defaultChecked /> none
          </div>
          <div>
          <p>Fit</p>
          <input type="radio" value='1' name={`${chars.Fit.id}`} /> Runs tight
          <input type="radio" value='2' name={`${chars.Fit.id}`}/> Runs slightly tight
          <input type="radio" value='3' name={`${chars.Fit.id}`} /> Perfect
          <input type="radio" value='4' name={`${chars.Fit.id}`} /> Runs slightly long
          <input type="radio" value='5' name={`${chars.Fit.id}`} /> Runs long
          <input type="radio" value='0' name={`${chars.Fit.id}`} defaultChecked /> none
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
