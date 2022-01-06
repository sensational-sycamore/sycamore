import React, { useState } from 'react';
import css from '../styles/galleryImages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';


const GalleryImages = ({ handleImageSelect, photos}) => {

  const [photosStart, setPhotosStart] = useState(0);
  const [photosEnd, setPhotosEnd] = useState(6);

  const handleUp = () => {
    if (photosStart > 0) {
      setPhotosStart(photosStart - 1);
      setPhotosEnd(photosEnd - 1);
    }
  };

  const handleDown = () => {
    if (photosEnd < photos.length) {
      setPhotosStart(photosStart + 1);
      setPhotosEnd(photosEnd + 1);
    }
  };


  return (
    <div className={css.imageOptions}>
      <div onClick={handleUp} >
        <FontAwesomeIcon color="white" icon={faChevronUp} size="sm"/>
      </div>

      {photos.slice(photosStart, photosEnd).map(photo => (
        <img className={css.eachImage} onClick={() => handleImageSelect(photo)} src={photo.thumbnail_url} alt="" key={photo.url}/>
      ))}

      <div onClick={handleDown} className={css.scrollButton}>
        <FontAwesomeIcon color="white" icon={faChevronDown} size="sm"/>
      </div>
    </div>
  );
};

export default GalleryImages;

