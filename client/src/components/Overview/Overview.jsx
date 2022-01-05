import React from 'react';
import axios from 'axios';
import Category from './subcomponents/Category.jsx';
import Description from './subcomponents/Description.jsx';
import Ratings from '../Shared/Ratings.jsx';
import Reviews from './subcomponents/Reviews.jsx';
import Title from './subcomponents/Title.jsx';
import Price from './subcomponents/Price.jsx';
import StyleSelector from './subcomponents/StyleSelector.jsx';
import Cart from './subcomponents/Cart.jsx';
import Gallery from './subcomponents/Gallery.jsx';
import css from './styles/overview.module.css';
class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      product: {},
      styles: [],
      currStyle: {'skus': {}, 'photos': [{'url': ''}]},
      reviews: [{'rating': 5}],
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

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getProductInfo();
      this.getStylesInfo();
      this.getReviewsInfo();
    }
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
      <div className={css.gridContainer}>
        <div className={css.major}>
          <Gallery className={css.gallery} currStyle={this.state.currStyle} />
          <Description className={css.description} product={this.state.product} />
        </div>
        <div className={css.minor}>
          <Ratings reviews={this.state.reviews} />
          <Reviews />
          <Category product={this.state.product} />
          <Title product={this.state.product} />
          <Price currStyle={this.state.currStyle} />
          <StyleSelector styles={this.state.styles} currStyle={this.state.currStyle} handleStyleSelect={this.handleStyleSelect}/>
          <Cart styles={this.state.styles} currStyle={this.state.currStyle} />
        </div>
      </div>
    );
  }
}

export default Overview;
