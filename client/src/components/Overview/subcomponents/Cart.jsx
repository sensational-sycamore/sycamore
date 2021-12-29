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
    console.log(sku);
    this.setState({currSku: sku});
  }
  handleQuantitySelect(quantity) {
    this.setState({currQuantity: quantity});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <SizeSelector currStyle={this.props.currStyle} handleSizeSelect={this.handleSizeSelect}/>
        <QuantitySelector handleQuantitySelect={this.handleQuantitySelect}/>
        <AddToCart currSku={this.state.currSku} currQuantity={this.state.currQuantity}/>
      </div>
    );
  }
}

export default Cart;
