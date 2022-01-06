import React, { useState } from 'react';
import Dropdown from './DropDown.jsx';


const QuantitySelector = ({ handleQuantitySelect }) => {
  const [selected, setSelected] = useState('SELECT QUANTITY');

  const selectQuantity = (selection) => {
    setSelected(selection);
    handleQuantitySelect(selection);
  };

  return (
    <Dropdown options={{1: 1, 2: 2, 3: 3, 4: 4, 5: 5}} clickHandler={selectQuantity} mainMessage={selected}/>
  )

};

export default QuantitySelector;
