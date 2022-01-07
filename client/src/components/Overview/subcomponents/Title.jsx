import React from 'react';
import css from '../styles/title.modules.css';

const Title = ({ name }) => (
  <div>
    <h1 className={css.title}>{name}</h1>
  </div>
);

export default Title;
