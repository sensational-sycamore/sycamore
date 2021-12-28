import React from 'react';
import './QuestionListItemAnswer.scss';
import QuestionListItemAnswerActions from '../QuestionListItemAnswerActions/QuestionListItemAnswerActions.jsx';
import QuestionListItemAnswerImages from '../QuestionListItemAnswerImages/QuestionListItemAnswerImages.jsx';

const QuestionListItemAnswer = ({onHelpulButtonClick}) => {
  return (
    <li>
      The answer is that the more I know...      <QuestionListItemAnswerImages />
      <QuestionListItemAnswerActions
        onHelpulButtonClick={onHelpulButtonClick}
      />
    </li>
  );
};

export default QuestionListItemAnswer;
