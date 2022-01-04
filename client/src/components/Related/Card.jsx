import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ratings from '../Shared/Ratings.jsx';
import css from './styles/card.module.css';

const Card = ({ product, currProduct, changeProductId }) => {

  const star = <FontAwesomeIcon icon={faStar} color="white" size="sm"/>;
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div id={product.details.id} className={css.cardContainer} onClick={() => changeProductId(product.details.id)}>
      <div className={css.compare} onClick={() => setShowComparison(!showComparison)}>{star}</div>
      <img className={css.cardImg} src={product.styles[0].photos[0].url} alt="" />
      <div>{product.details.category}</div>
      <div>{product.styles[0].original_price}</div>
      <Ratings reviews={product.reviews}/>
      {showComparison && (
        <div>
          {currProduct.features.map(feature => <div key={feature.value}>{feature.value}</div>)}
          {product.details.features.map(feature => <div key={feature.value}>{feature.value}</div>)}
        </div>
      )}

    </div>
  );
};

export default Card;
