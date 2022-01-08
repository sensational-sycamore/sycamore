import React from 'react';
import css from '../styles/price.module.css';

const Price = ({ salePrice, originalPrice }) => {
  const whichPrice = () => {
    if (salePrice) {
      return (
        <div className={css.priceContainer}>
          <div className={css.newPrice}>${ salePrice }</div>
          <div className={css.oldPrice}>${ originalPrice }</div>
        </div>
      );
    } else {
      return (
        <div className={css.priceContainer}>
          <div className={css.regularPrice}>${ originalPrice }</div>
        </div>
      );
    }
  };

  return whichPrice();
};


export default Price;
