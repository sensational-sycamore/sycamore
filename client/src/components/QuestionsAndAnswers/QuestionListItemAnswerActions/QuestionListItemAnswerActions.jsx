import React from 'react';
import './QuestionListItemAnswerActions.scss';
import HelpfullButton from '../HelpfullButton/HelpfullButton.jsx';

const QuestionListItemAnswerActions = () => {
  return (
    <div className="answer-actions">
      <p>by User123, May 2, 2019</p>
      <p>|</p>
      <HelpfullButton />
      <p>|</p>
      <button>Report</button>
    </div>
  );
};

export default QuestionListItemAnswerActions;
