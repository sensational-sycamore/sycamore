import React from 'react';

const SizeSelector = ({ currStyle, handleSizeSelect }) => {
  const isNoAvailble = (style) => {
    return Object.keys(style.skus).reduce((acc, sku) => acc + currStyle.skus[sku].quantity, 0) === 0;
  };

  return (
    <ul>
      {(isNoAvailble(currStyle)) ?
        <div>OUT OF STOCK</div> :
        <div>
          {Object.keys(currStyle.skus).map(sku => {
            if (currStyle.skus[sku].quantity < 1) {
              return (
                <li key={sku} onClick={() => handleSizeSelect(sku)} className="unavailable">{currStyle.skus[sku].size}</li>
              );
            } else {
              return <li key={sku} onClick={() => handleSizeSelect(sku)} className="available">{currStyle.skus[sku].size}</li>;
            }
          })}
        </div>
      }
    </ul>
  );
};

export default SizeSelector;