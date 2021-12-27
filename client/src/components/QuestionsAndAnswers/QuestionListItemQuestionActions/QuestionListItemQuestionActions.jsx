import React from 'react';
import './QuestionListItemQuestionActions.scss';
import HelpfullButton from '../HelpfullButton/HelpfullButton.jsx';

const QuestionListItemQuestionActions = () => {
  return (
    <div className="question-actions">
      <HelpfullButton />
      <p>|</p>
      <button>Add answer</button>
    </div>
  );
};

export default QuestionListItemQuestionActions;
