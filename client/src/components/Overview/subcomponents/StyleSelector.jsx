import React, { useState } from 'react';
import css from '../styles/styleSelector.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';

const StyleSelector = ({ styles, currStyle, handleStyleSelect }) => {

  return (
    <div>
      <h4><b>STYLE {'>'} </b> {currStyle.name}</h4>
      <div className={css.styleContainer}>
        {styles.map(style => (
          <div className={css.styleImageContainer} key={uniqid()}>
            {currStyle.style_id === style.style_id ?
              <div className={css.checkMark}><FontAwesomeIcon icon={faCheck} size="xs"/></div> :
              null
            }
            <img key={style.style_id} className={`${css.styleImage} ${currStyle.style_id === style.style_id ? css.selected : null}`} src={style.photos[0].thumbnail_url} alt="thumbnail" onClick={() => handleStyleSelect(style)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
