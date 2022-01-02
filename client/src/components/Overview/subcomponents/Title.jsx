import React from 'react';
import css from '../styles/title.modules.css';

const Title = ({ product }) => (
  <div>
    <h1 className={css.title}>{product.name}</h1>
  </div>
);

export default Title;
