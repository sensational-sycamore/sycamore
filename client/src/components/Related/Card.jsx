import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Ratings from '../Shared/Ratings.jsx';
import css from './styles/card.module.css';

const Card = ({ product, currProduct, changeProductId }) => {

  const star = <FontAwesomeIcon icon={faStar} color="white" size="sm"/>;
  const check = <div className={css.icon}><FontAwesomeIcon icon={faCheck} color="black" size="sm"/></div>;
  const x = <div className={css.icon}><FontAwesomeIcon icon={faTimes} color="black" size="sm"/></div>;
  const spacer = '   ';
  const [showComparison, setShowComparison] = useState(false);
  const comparisonClick = (e) => {
    e.stopPropagation();
    setShowComparison(!showComparison);
  };

  const comparison = (product1, product2) => {
    const compObj = {};
    const output = [];

    product1.features.map(feature => compObj[feature.value] = 1);
    product2.features.map(feature => {
      if (compObj[feature.value]) {
        compObj[feature.value] = 3;
      } else {
        compObj[feature.value] = 2;
      }
    });

    Object.keys(compObj).map(key => {
      if (compObj[key] === 1) {
        output.push(<div key={key}>{check}{spacer}{key}{spacer}{x}</div>);
      } else if (compObj[key] === 2) {
        output.push(<div key={key}>{x}{spacer}{key}{spacer}{check}</div>);
      } else {
        output.push(<div key={key}>{check}{spacer}{key}{spacer}{check}</div>);
      }
    });

    return output;
  };

  return (
    <div id={product.details.id} className={css.cardContainer} onClick={() => changeProductId(product.details.id)}>
      <div className={css.compare} onClick={comparisonClick}>{star}</div>
      <img className={css.cardImg} src={product.styles[0].photos[0].url} alt="" />
      <div className={css.category}>{product.details.category.toUpperCase()}</div>
      <div className={css.name}>{product.details.name}</div>
      <div className={css.price}>{product.styles[0].original_price}</div>
      <div className={css.rating}><Ratings reviews={product.reviews}/></div>
      {showComparison && (
        <div className={css.comparison} onClick={comparisonClick}>
          {comparison(currProduct, product.details)}
        </div>
      )}

    </div>
  );
};

export default Card;
