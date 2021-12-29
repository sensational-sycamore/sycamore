import React from 'react';
import Dropdown from './Dropdown.jsx';


const QuantitySelector = ({ handleQuantitySelect }) => (
  <Dropdown options={{1: 1, 2: 2, 3: 3, 4: 4, 5: 5}} clickHandler={handleQuantitySelect} mainMessage={'SELECT QUANTITY'}/>
);

export default QuantitySelector;
