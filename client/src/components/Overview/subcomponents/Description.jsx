import React from 'react';

const Description = ({ product }) => (
  <div>
    <h3>{product.slogan}</h3>
    <h3>{product.description}</h3>
  </div>
);

export default Description;
