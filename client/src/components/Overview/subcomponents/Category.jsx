import React from 'react';

const Category = ({ product }) => (
  <div>
    <h1>Category</h1>
    <div>{product.category}</div>
  </div>
);

export default Category;