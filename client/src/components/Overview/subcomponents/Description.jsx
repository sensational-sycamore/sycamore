import React from 'react';

const Description = ({ product }) => (
  <div>
    <h1>Description</h1>
    <div>{product.slogan}</div>
    <div>{product.description}</div>
  </div>
);

export default Description;