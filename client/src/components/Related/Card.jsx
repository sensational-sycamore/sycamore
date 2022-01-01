import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Card = ({ product }) => {

  const star = <FontAwesomeIcon icon={faStar} size="xs"/>;

  return (
    <div className="product">
      Card

      <div value="compare">{star}</div>
    </div>
  );
} ;

export default Card;