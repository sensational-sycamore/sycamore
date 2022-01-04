import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import css from './styles/cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';


const Cards = ({ products, currProduct, changeProductId }) => {

  const [productsStart, setProductsStart] = useState(0);
  const [productsEnd, setProductsEnd] = useState(4);

  const handleUp = () => {
    if (productsStart > 0) {
      setProductsStart(productsStart - 1);
      setProductsEnd(productsEnd - 1);
    }
  };

  const handleDown = () => {
    if (productsEnd < products.length) {
      setProductsStart(productsStart + 1);
      setProductsEnd(productsEnd + 1);
    }
  };


  return (
    <div className={css.cardsContainer}>
      <div className={css.scrollIcon} onClick={handleUp} >
        <FontAwesomeIcon icon={faChevronLeft} size="lg"/>
      </div>

      {products.slice(productsStart, productsEnd).map(product => (
        <Card key={product.details.id} currProduct={currProduct} product={product} changeProductId={changeProductId}/>
      ))}

      <div className={css.scrollIcon} onClick={handleDown} >
        <FontAwesomeIcon icon={faChevronRight} size="lg"/>
      </div>

    </div>
  );
};

export default Cards;