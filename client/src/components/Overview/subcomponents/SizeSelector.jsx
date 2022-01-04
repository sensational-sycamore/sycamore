import React, { useState } from 'react';
import css from '../styles/sizeSelector.module.css';
import Dropdown from './Dropdown.jsx';

const SizeSelector = ({ currStyle, handleSizeSelect }) => {
  const [selected, setSelected] = useState('SELECT SIZE');

  const selectSize = (selection) => {
    setSelected(currStyle.skus[selection].size);
    handleSizeSelect(selection);
  };

  const availableSkus = Object.keys(currStyle.skus)
    .filter(sku => currStyle.skus[sku].quantity !== 0);

  const availableSizes = {};

  for (var sku of availableSkus) {
    availableSizes[sku] = currStyle.skus[sku].size;
  }

  return (
    <Dropdown options={availableSizes} clickHandler={selectSize} mainMessage={selected}/>
  );
};


export default SizeSelector;
