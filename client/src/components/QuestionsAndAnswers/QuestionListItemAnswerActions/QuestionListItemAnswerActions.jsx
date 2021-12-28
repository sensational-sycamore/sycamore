import React from 'react';
import './QuestionListItemAnswerActions.scss';
import HelpfulButton from '../../Shared/HelpfulButton/HelpfulButton.jsx';

const QuestionListItemAnswerActions = ({onHelpulButtonClick}) => {
  return (
    <div className="answer-actions">
      <p>by User123, May 2, 2019</p>
      <p>|</p>
      <HelpfulButton
        onHelpulButtonClick={onHelpulButtonClick}
      />
      <p>|</p>
      <button>Report</button>
    </div>
  );
};

export default QuestionListItemAnswerActions;
