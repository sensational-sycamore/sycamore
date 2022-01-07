import React, { useState } from 'react';
import css from '../styles/galleryImages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const GalleryImages = ({ handleImageSelect, photos, currImage}) => {

  const [photosStart, setPhotosStart] = useState(0);
  const [photosEnd, setPhotosEnd] = useState(6);
  const [selectedImg, setSelectedImg] = useState(0);

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

  const handleSelect = (index) => {
    setSelectedImg(index);
    handleImageSelect(index);
  };


  return (
    <div className={css.imagesContainer}>
      <span className={css.leftIcon} onClick={handleUp}>
        <FontAwesomeIcon icon={faChevronLeft} size="lg" color="white"/>
      </span>
      <span className={css.rightIcon} onClick={handleDown}>
        <FontAwesomeIcon icon={faChevronRight} size="lg" color="white"/>
      </span>
      <div className={css.imageOptions}>
        <div onClick={handleUp} className={css.scrollButton}>
          <FontAwesomeIcon color="white" icon={faChevronUp} size="sm"/>
        </div>
        {photos.slice(photosStart, photosEnd).map((photo, index) => (
          <img className={`${css.eachImage} ${index === selectedImg ? css.selected : null}`} onClick={() => handleSelect(index)} src={photo.thumbnail_url} alt="" key={index}/>
        ))}

        <div onClick={handleDown} className={css.scrollButton}>
          <FontAwesomeIcon color="white" icon={faChevronDown} size="sm"/>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;

