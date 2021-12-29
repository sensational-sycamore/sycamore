import React from 'react';
import css from '../styles/sizeSelector.module.css';
import Dropdown from './Dropdown.jsx';

const SizeSelector = ({ currStyle, handleSizeSelect }) => {
  const availableSkus = Object.keys(currStyle.skus)
    .filter(sku => currStyle.skus[sku].quantity !== 0);
  const availableSizes = {};
  for (var sku of availableSkus) {
    availableSizes[sku] = currStyle.skus[sku].size;
  }

  return (
    <ul>
      <Dropdown options={availableSizes} clickHandler={handleSizeSelect}/>
    </ul>
  );
};


export default SizeSelector;
