import React from 'react';
import './QuestionListItemAnswer.scss';
import QuestionListItemAnswerActions from '../QuestionListItemAnswerActions/QuestionListItemAnswerActions.jsx';
import QuestionListItemAnswerImages from '../QuestionListItemAnswerImages/QuestionListItemAnswerImages.jsx';

const QuestionListItemAnswer = ({answer, onHelpulButtonClick, images}) => {
  return (
    <li>
      <p>{answer}</p>
      {!!images.length && <QuestionListItemAnswerImages images={images} />}
      <QuestionListItemAnswerActions onHelpulButtonClick={onHelpulButtonClick}/>
    </li>
  );
};

export default QuestionListItemAnswer;
