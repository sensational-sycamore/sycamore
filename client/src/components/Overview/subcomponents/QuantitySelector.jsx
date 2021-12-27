import React from 'react';

const QuantitySelector = ({ handleQuantitySelect }) => (
  <ul>
    <li value={1} onClick={(e) => handleQuantitySelect(e.target.value)}>1</li>
    <li value={2} onClick={(e) => handleQuantitySelect(e.target.value)}>2</li>
    <li value={3} onClick={(e) => handleQuantitySelect(e.target.value)}>3</li>
    <li value={4} onClick={(e) => handleQuantitySelect(e.target.value)}>4</li>
    <li value={5} onClick={(e) => handleQuantitySelect(e.target.value)}>5</li>
  </ul>
);

export default QuantitySelector;