import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import css from './styles/related.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';


const Cards = ({ products, currProduct, changeProductId }) => {

  const [productsStart, setProductsStart] = useState(0);
  const [productsEnd, setProductsEnd] = useState(6);

  const handleUp = () => {
    if (product > 0) {
      setProductsStart(photosStart - 1);
      setProductsEnd(photosEnd - 1);
    }
  };

  const handleDown = () => {
    if (productsEnd < products.length) {
      setProductsStart(productsStart + 1);
      setProductsEnd(productsEnd + 1);
    }
  };


  return (
    <div className={css.imageOptions}>
      <div onClick={handleUp} >
        <div className={css.scrollIcon}><FontAwesomeIcon icon={faChevronLeft} size="lg"/></div>
      </div>

      {products.slice(productsStart, productsEnd).map(product => (
        <Card key={product.details.id} currProduct={currProduct} product={product} changeProductId={changeProductId}/>
      ))}

      <div onClick={handleDown} className={css.scrollButton}>
        <div className={css.scrollIcon}><FontAwesomeIcon icon={faChevronRight} size="lg"/></div>
      </div>
    </div>
  );
};

export default Cards;