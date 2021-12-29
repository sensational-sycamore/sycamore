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
      <Dropdown options={availableSizes} clickHandler={handleSizeSelect} mainMessage={'SELECT SIZE'}/>
      {/* {(isNoAvailble(currStyle)) ?
        <div>OUT OF STOCK</div> :
        <div className={css.dropdown}>
          {Object.keys(currStyle.skus).map(sku => {
            if (currStyle.skus[sku].quantity < 1) {
              return (
                <li className={css.dropdownItem} key={sku} onClick={() => handleSizeSelect(sku)} className="unavailable">{currStyle.skus[sku].size}</li>
              );
            } else {
              return <li className={css.dropdownItem} key={sku} onClick={() => handleSizeSelect(sku)} className="available">{currStyle.skus[sku].size}</li>;
            }
          })}
        </div>
      } */}
    </ul>
  );
};


export default SizeSelector;
