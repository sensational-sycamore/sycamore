import React from 'react';
import css from '../styles/price.module.css';

const Price = ({ currStyle }) => {
  const whichPrice = () => {
    if (currStyle.sale_price) {
      return (
        <div>
          <div className={css.oldPrice}>${ currStyle.original_price }</div>
          <div className={css.newPrice}>${currStyle.sale_price}</div>
        </div>
      );
    } else {
      return (
        <div className={css.regularPrice}>${ currStyle.original_price }</div>
      );
    }
  };

  return whichPrice();
};


export default Price;
