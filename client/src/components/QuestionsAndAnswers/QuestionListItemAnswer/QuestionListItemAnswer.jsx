import React from 'react';
import './QuestionListItemAnswer.scss';
import QuestionListItemAnswerActions from '../QuestionListItemAnswerActions/QuestionListItemAnswerActions.jsx';
import QuestionListItemAnswerImages from '../QuestionListItemAnswerImages/QuestionListItemAnswerImages.jsx';

const QuestionListItemAnswer = () => {
  return (
    <li>
      The answer is that the more I know...      <QuestionListItemAnswerImages />
      <QuestionListItemAnswerActions />
    </li>
  );
};

export default QuestionListItemAnswer;
