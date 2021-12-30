import React from 'react';
import './QuestionListItemAnswer.scss';
import QuestionListItemAnswerActions from '../QuestionListItemAnswerActions/QuestionListItemAnswerActions.jsx';
import QuestionListItemAnswerImages from '../QuestionListItemAnswerImages/QuestionListItemAnswerImages.jsx';

const QuestionListItemAnswer = ({answer, onHelpulButtonClick, images, author, date}) => {
  return (
    <li className="answer">
      <p className="answer-text">{answer}</p>
      {!!images.length && <QuestionListItemAnswerImages images={images} />}
      <QuestionListItemAnswerActions
        onHelpulButtonClick={onHelpulButtonClick}
        author={author}
        date={date}
      />
    </li>
  );
};

export default QuestionListItemAnswer;
