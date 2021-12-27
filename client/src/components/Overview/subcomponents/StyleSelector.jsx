import React from 'react';

const StyleSelector = ({ styles, currStyle, handleStyleSelect }) => (
  <div>
    <div><b>STYLE {'>'} </b> {currStyle.name}</div>
    {styles.map(style => (
      <div key={style.style_id}>
        <img src={style.photos[0].thumbnail_url} alt="thumbnail" onClick={() => handleStyleSelect(style)}/>
      </div>
    ))}
  </div>
);

export default StyleSelector;