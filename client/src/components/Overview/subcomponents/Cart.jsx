import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleQuantitySelect = this.handleQuantitySelect.bind(this);

    this.state = {
      currSku: '',
      currQuantity: '',
    };
  }

  handleSizeSelect(sku) {
    this.setState({currSku: sku});
  }
  handleQuantitySelect(quantity) {
    this.setState({currQuantity: quantity});
  }

  render() {
    const { currSku, currQuantity } = this.state;
    const { currStyle } = this.props;
    return (
      <div>
        <SizeSelector currStyle={currStyle} handleSizeSelect={this.handleSizeSelect}/>
        <QuantitySelector skuNQuantity={currStyle.skus[currSku]} handleQuantitySelect={this.handleQuantitySelect}/>
        <AddToCart currSku={currSku} currQuantity={currQuantity}/>
      </div>
    );
  }
}

export default Cart;
