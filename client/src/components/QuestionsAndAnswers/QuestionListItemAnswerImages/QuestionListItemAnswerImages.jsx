import React from 'react';
import './QuestionListItemAnswerImages.scss';

const QuestionListItemAnswerImages = ({images}) => {
  return (
    <ul className="answer-images">
      {images.map((image, idx) => {
        return (
          <li className="answer-image" key={idx}>
            <img src={image}/>
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionListItemAnswerImages;
