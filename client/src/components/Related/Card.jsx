import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Card = ({ product }) => {

  const star = <FontAwesomeIcon icon={faStar} size="xs"/>;

  return (
    <div className="product">
      <div value="compare">{star}</div>
      <img src={product.styles[0].photos[0].url} alt="" />
      <div>{product.details.category}</div>
      <div>{product.styles[0].original_price}</div>
    </div>
  );
};

export default Card;