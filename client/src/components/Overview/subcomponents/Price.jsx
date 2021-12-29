import React from 'react';

const Price = ({ currStyle }) => (
  <div>
    <div>${ currStyle.original_price }</div>
    { currStyle.sale_price && <div>${currStyle.sale_price}</div>}
  </div>
);

export default Price;
