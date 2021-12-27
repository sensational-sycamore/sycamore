import React from 'react';
import axios from 'axios';
import OverviewCss from './style/overview.css';
import Category from './subcomponents/Category.jsx';
import Description from './subcomponents/Description.jsx';
import Ratings from './subcomponents/Ratings.jsx';
import Title from './subcomponents/Title.jsx';
import Price from './subcomponents/Price.jsx';
import StyleSelector from './subcomponents/StyleSelector.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      product: {},
      styles: [],
      currStyle: {},
      reviews: [{'rating': 5}]
    };

    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStylesInfo = this.getStylesInfo.bind(this);
    this.getReviewsInfo = this.getReviewsInfo.bind(this);
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
  }

  componentDidMount() {
    this.getProductInfo();
    this.getStylesInfo();
    this.getReviewsInfo();
  }

  getProductInfo() {
    axios.get(`/products/${this.props.productId}`)
      .then(response => this.setState({
        product: response.data
      }));
  }

  getStylesInfo() {
    axios.get(`/products/${this.props.productId}/styles`)
      .then(response => this.setState({
        styles: response.data.results,
        currStyle: response.data.results[0]
      }));
  }

  getReviewsInfo() {
    axios.get(`/reviews?product_id=${this.props.productId}`)
      .then(response => this.setState({
        reviews: response.data.results
      }));
  }

  handleStyleSelect(style) {
    this.setState({currStyle: style});
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="title">This is the Overview Div</h1>
        <div>Product id {this.state.productId}</div>
        <Category product={this.state.product} />
        <Description product={this.state.product} />
        <Title product={this.state.product} />
        <Ratings reviews={this.state.reviews} />
        <Price currStyle={this.state.currStyle} />
        <StyleSelector styles={this.state.styles} currStyle={this.state.currStyle} handleStyleSelect={this.handleStyleSelect}/>
        <hr />
      </div>
    );
  }
}

export default Overview;