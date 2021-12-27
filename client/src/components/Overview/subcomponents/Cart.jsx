import React from 'react';
import SizeSelector from './SizeSelector.jsx';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleSizeSelect = this.handleSizeSelect.bind(this);

    this.state = {
      currSku: '',
      currQuantity: '',
    };
  }

  handleSizeSelect(sku) {
    this.setState({currSku: sku});
  }

  render() {
    return (
      <div>
        <SizeSelector currStyle={this.props.currStyle} handleSizeSelect={this.handleSizeSelect}/>
      </div>
    );
  }
}

export default Cart;