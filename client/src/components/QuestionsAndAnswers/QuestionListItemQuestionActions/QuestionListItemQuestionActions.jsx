import React from 'react';
import './QuestionListItemQuestionActions.scss';
import HelpfullButton from '../HelpfullButton/HelpfullButton.jsx';

const QuestionListItemQuestionActions = ({helpfulness, id}) => {
  return (
    <div className="question-actions">
      <HelpfullButton
        helpfulness={helpfulness}
        id={id}
      />
      <p>|</p>
      <button>Add answer</button>
    </div>
  );
};

export default QuestionListItemQuestionActions;
