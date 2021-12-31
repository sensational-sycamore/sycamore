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
    const chars = this.props.characteristics;
    if (
     !!chars.Size && event.target.name === chars.Size.id.toString() ||
     !!chars.Width && event.target.name === chars.Width.id.toString() ||
     !!chars.Comfort && event.target.name === chars.Comfort.id.toString() ||
     !!chars.Quality && event.target.name === chars.Quality.id.toString() ||
     !!chars.Length && event.target.name === chars.Length.id.toString() ||
     !!chars.Fit && event.target.name === chars.Fit.id.toString()
    ) {
      this.setState({ characteristics: {...this.state.characteristics, [event.target.name]: Number(event.target.value) } });
    } else if (event.target.name === 'recommend') {
      this.setState({ [event.target.name]: event.target.value==='yes'? true: false });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleSubmitReview(event) {
    console.log('this.state:', this.state);
    this.props.AddReview(this.state);
    this.props.handleCloseAddReviewsForm(event);
  }

  render() {
    const chars = this.props.characteristics;
    const { summary, body, name, email } = this.state;
    // const keys = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
    let sizeStr = !!chars.Size ? `${chars.Size.id}` : 'size';
    let widthStr= !!chars.Width ? `${chars.Width.id}` : 'width';
    let comfortStr = !!chars.Comfort ? `${chars.Comfort.id}` : 'comfort';
    let qualityStr = !!chars.Quality ? `${chars.Quality.id}` : 'quality';
    let lengthStr = !!chars.Length ? `${chars.Length.id}` : 'length';
    let fitStr = !!chars.Fit ? `${chars.Fit.id}` : 'fit';

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
          {chars.Size &&
          <div>
          <p>Size</p>
          <input type="radio" value='1' name={sizeStr} /> A size too small
          <input type="radio" value='2' name={sizeStr} /> ½ a size too small
          <input type="radio" value='3' name={sizeStr} /> Perfect
          <input type="radio" value='4' name={sizeStr} /> ½ a size too big
          <input type="radio" value='5' name={sizeStr} /> A size too wide
          <input type="radio" value='0' name={sizeStr} defaultChecked /> none
          </div>
          }
           {chars.Width &&
          <div>
          <p>Width</p>
          <input type="radio" value='1' name={widthStr} /> Too narrow
          <input type="radio" value='2' name={widthStr} /> Slightly narrow
          <input type="radio" value='3' name={widthStr} /> Perfect
          <input type="radio" value='4' name={widthStr} /> Slightly wide
          <input type="radio" value='5' name={widthStr} /> Too wide
          <input type="radio" value='0' name={widthStr} defaultChecked /> none
          </div>
          }
          {chars.Comfort &&
          <div>
          <p>Comfort</p>
          <input type="radio" value='1' name={comfortStr} /> Uncomfortable
          <input type="radio" value='2' name={comfortStr} /> Slightly uncomfortable
          <input type="radio" value='3' name={comfortStr} /> Ok
          <input type="radio" value='4' name={comfortStr} /> Comfortable
          <input type="radio" value='5' name={comfortStr} /> Perfect
          <input type="radio" value='0' name={comfortStr} defaultChecked /> none
          </div>
          }
          {chars.Quality &&
          <div>
          <p>Quality</p>
          <input type="radio" value='1' name={qualityStr} /> Poor
          <input type="radio" value='2' name={qualityStr}/> Below average
          <input type="radio" value='3' name={qualityStr} /> What I expected
          <input type="radio" value='4' name={qualityStr} /> Pretty great
          <input type="radio" value='5' name={qualityStr} /> Perfect
          <input type="radio" value='0' name={qualityStr} defaultChecked /> none
          </div>
          }
          {chars.Length &&
          <div>
          <p>Length</p>
          <input type="radio" value='1' name={lengthStr} /> Runs Short
          <input type="radio" value='2' name={lengthStr} /> Runs slightly short
          <input type="radio" value='3' name={lengthStr} /> Perfect
          <input type="radio" value='4' name={lengthStr} /> Runs slightly long
          <input type="radio" value='5' name={lengthStr} /> Runs long
          <input type="radio" value='0' name={lengthStr} defaultChecked /> none
          </div>
          }
          {chars.Fit &&
          <div>
          <p>Fit</p>
          <input type="radio" value='1' name={fitStr} /> Runs tight
          <input type="radio" value='2' name={fitStr}/> Runs slightly tight
          <input type="radio" value='3' name={fitStr} /> Perfect
          <input type="radio" value='4' name={fitStr} /> Runs slightly long
          <input type="radio" value='5' name={fitStr} /> Runs long
          <input type="radio" value='0' name={fitStr} defaultChecked /> none
          </div>
           }
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
