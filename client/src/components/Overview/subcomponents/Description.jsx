import React from 'react';
import css from '../styles/description.module.css';

const Description = ({ product }) => (
  <div className={css.descriptionContainer}>
    <h3 className={css.slogan}>{product.slogan}</h3>
    <h3 className={css.description}>{product.description}</h3>
  </div>
);

export default Description;
