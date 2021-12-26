import React from 'react';

const Description = ({ product }) => (
  <div>
    <div>{product.slogan}</div>
    <div>{product.description}</div>
  </div>
);

export default Description;