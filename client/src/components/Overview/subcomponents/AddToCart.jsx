import React from 'react';
import axios from 'axios';
import css from '../styles/addToCart.module.css';

const AddToCart = ({ currSku, currQuantity }) => {
  const postToCart = () => {
    axios({
      method: 'post',
      url: '/cart',
      data: {'sku_id': parseInt(currSku)}
    })
      .then(response => console.log(response));
  };

  const handleClicked = () => {
    if (currSku.length === 0) {
      console.log('need size');
    } else if (currQuantity.length === 0 || currQuantity === 0) {
      console.log('need quantity');
    } else {
      for (let i = 0; i < currQuantity; i++) {
        postToCart();
      }
    }
  };



  return (
    <button className={css.addToCartButton} onClick={() => handleClicked()}>Add to Cart</button>
  );
};

export default AddToCart;
