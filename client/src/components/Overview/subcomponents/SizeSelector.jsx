import React from 'react';

const SizeSelector = ({ currStyle, handleSizeSelect }) => (
  <ul>
    {Object.keys(currStyle.skus).map(sku => {
      if (currStyle.skus[sku].quantity < 1) {
        return (
          <div className="unavailable">{currStyle.skus[sku].size}</div>
        );
      } else {
        return <div className="available">{currStyle.skus[sku].size}</div>;
      }
    })}
  </ul>
);

export default SizeSelector;