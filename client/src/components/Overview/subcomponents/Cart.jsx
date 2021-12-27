import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';


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
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <SizeSelector currStyle={this.props.currStyle} handleSizeSelect={this.handleSizeSelect}/>
        <QuantitySelector handleQuantitySelect={this.handleQuantitySelect}/>
      </div>
    );
  }
}

export default Cart;