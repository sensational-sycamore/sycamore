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
      <div className={css.category}>{product.details.category.toUpperCase()}</div>
      <div className={css.name}>{product.details.name}</div>
      <div className={css.price}>{product.styles[0].original_price}</div>
      <div className={css.rating}><Ratings reviews={product.reviews}/></div>
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
