import React from 'react';
import css from '../styles/category.module.css';

const Category = ({ product }) => (
  <p className={css.title}>{product.category}</p>
);

export default Category;
