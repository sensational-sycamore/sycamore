import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const Related = ({ productId, changeProductId }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

  // useEffect(() => {
  //   async function getRelatedProducts() {
  //     const { data } = await axios.get(`/products/${productId}/related`)
  //     Promise.all(data.map(async (id) => await axios.get(`/products/${id}`)))
  //       .then(data => data.map(product => product.data))
  //       .then(results => setRelatedProducts(results))
  //   }

  //   getRelatedProducts();

  // }, []);

  useEffect(() => {
    async function getRelatedProducts() {
      const { data } = await axios.get(`/products/${productId}/related`);
      Promise.all(data.map(async (id) => await Promise.all([
          await axios.get(`/products/${id}`),
          await axios.get(`/products/${id}/styles`),
          await axios.get(`/reviews?product_id=${id}`)
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

    getRelatedProducts();

  }, []);


  return (
    <div >
      Related
      {relatedProducts.map(product => <Card key={product.details.id} product={product}/>)}
    </div>
  );
};

export default Related;