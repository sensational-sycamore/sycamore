import React from 'react';

const Price = ({ currStyle }) => (
  <div>
    <h4>${ currStyle.original_price }</h4>
    { currStyle.sale_price && <div>${currStyle.sale_price}</div>}
  </div>
);

export default Price;
