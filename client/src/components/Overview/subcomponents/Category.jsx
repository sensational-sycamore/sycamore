import React from 'react';
import css from '../styles/category.module.css';

const Category = ({ category }) => (
  <p className={css.title}>{category}</p>
);

export default Category;
