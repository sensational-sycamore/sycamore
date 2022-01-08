import React from 'react';
import css from '../styles/description.module.css';

const Description = ({ slogan, description }) => (
  <div className={css.descriptionContainer}>
    <h3 className={css.slogan}>{slogan}</h3>
    <h3 className={css.description}>{description}</h3>
  </div>
);

export default Description;
