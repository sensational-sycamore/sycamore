import React from 'react';
import './QuestionListItemAnswer.scss';
import QuestionListItemAnswerActions from '../QuestionListItemAnswerActions/QuestionListItemAnswerActions.jsx';
import QuestionListItemAnswerImages from '../QuestionListItemAnswerImages/QuestionListItemAnswerImages.jsx';

const QuestionListItemAnswer = () => {
  return (
    <li>
      Answer1:
      <QuestionListItemAnswerImages />
      <QuestionListItemAnswerActions />
    </li>
  );
};

export default QuestionListItemAnswer;
