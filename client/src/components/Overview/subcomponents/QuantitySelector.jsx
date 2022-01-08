import React, { useState, useEffect } from 'react';
import Dropdown from './DropDown.jsx';
import css from '../styles/quantitySelector.module.css';


const QuantitySelector = ({ skuNQuantity, handleQuantitySelect }) => {
  const [selected, setSelected] = useState('SELECT QUANTITY');
  const [showWarning, setShowWarning] = useState(false);

  const selectQuantity = (selection) => {
    setSelected(selection);
    handleQuantitySelect(selection);
  };

  const gernerateOptions = () => {
    const quantity = {};

    if (skuNQuantity) {
      const cap = skuNQuantity.quantity > 15 ? 15 : skuNQuantity.quantity;
      for (let i = 1; i <= cap; i++) {
        quantity[i] = i;
      }
      return quantity;
    }

    return {};
  };

  const handleClicked = () => {
    if (!skuNQuantity) {
      setShowWarning(true);
    }
  };

  useEffect(() => {
    if (skuNQuantity) {
      setShowWarning(false);
    }
  });

  return (
    <div onClick={handleClicked}>
      {showWarning ? <div className={css.warning}>Please select size first</div> : null}
      <Dropdown options={gernerateOptions()} clickHandler={selectQuantity} mainMessage={selected}/>
    </div>
  );

};

export default QuantitySelector;
