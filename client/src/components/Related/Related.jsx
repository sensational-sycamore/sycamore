import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const Related = ({ productId, changeProductId }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    async function getRelatedProducts() {
      const { data } = await axios.get(`/products/${productId}/related`)
      Promise.all(data.map(async (id) => await axios.get(`/products/${id}`)))
        .then(data => data.map(product => product.data))
        .then(results => setRelatedProducts(results))
    }

    getRelatedProducts();

  }, []);



  return (
    <div >
      Related
      {relatedProducts.map(product => <Card key={product.id} product={product}/>)}
    </div>
  );
};

export default Related;