import React from 'react';

const SizeSelector = ({ currStyle, handleSizeSelect }) => (
  <ul>
    {Object.keys(currStyle.skus).map(sku => {
      if (currStyle.skus[sku].quantity < 1) {
        return (
          <div key={sku} onClick={() => handleSizeSelect(sku)} className="unavailable">{currStyle.skus[sku].size}</div>
        );
      } else {
        return <div key={sku} onClick={() => handleSizeSelect(sku)} className="available">{currStyle.skus[sku].size}</div>;
      }
    })}
  </ul>
);

export default SizeSelector;