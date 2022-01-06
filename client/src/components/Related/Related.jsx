import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards.jsx';
import css from './styles/related.module.css';

const Related = ({ productId, changeProductId }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currProduct, setcurrProduct] = useState([]);

  useEffect(() => {
    async function getRelatedProducts() {
      const { data } = await axios.get(`/products/${productId}/related`);
      Promise.all(data.map(async (id) => await Promise.all([
          await axios.get(`/products/${id}`),
          await axios.get(`/products/${id}/styles`),
          await axios.get(`/reviews?product_id=${id}`),
        ])))
        .then(data => data.map(productArr => {
          let product = {};
          product.details = productArr[0].data;
          product.styles = productArr[1].data.results;
          product.reviews = productArr[2].data.results;
          return product;
        }))
        .then(results => setRelatedProducts(results))
    }

    async function getCurrProduct() {
      const { data } = await axios.get(`/products/${productId}`)
      setcurrProduct(data)
    }

    getRelatedProducts();
    getCurrProduct();

  }, [productId]);


  return (
    <div className={css.relatedContainer}>
      <div className={css.heading}>RELATED PRODUCTS</div>
      <Cards products={relatedProducts} currProduct={currProduct} changeProductId={changeProductId}/>
    </div>
  );
};

export default Related;
