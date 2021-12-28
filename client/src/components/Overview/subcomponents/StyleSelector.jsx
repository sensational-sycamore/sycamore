import React from 'react';
import css from '../styles/styleSelector.module.css';

const StyleSelector = ({ styles, currStyle, handleStyleSelect }) => (
  <div>
    <div><b>STYLE {'>'} </b> {currStyle.name}</div>
    <div className={css.styleImageContainer}>
      {styles.map(style => (
        <img key={style.style_id} className={css.styleImage} src={style.photos[0].thumbnail_url} alt="thumbnail" onClick={() => handleStyleSelect(style)}/>
      ))}
    </div>
  </div>
);

export default StyleSelector;