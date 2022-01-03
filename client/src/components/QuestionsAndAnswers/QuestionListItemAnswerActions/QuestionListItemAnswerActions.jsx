import React from 'react';
import './QuestionListItemAnswerActions.scss';
import HelpfulButton from '../../Shared/HelpfulButton/HelpfulButton.jsx';

const QuestionListItemAnswerActions = ({onHelpulButtonClick, author, date, helpfulness, id}) => {
  return (
    <div className="answer-actions">
      <p>by {author}, {date}</p>
      <p className="separator">|</p>
      <HelpfulButton
        onHelpulButtonClick={onHelpulButtonClick}
        helpfulness={helpfulness}
        id={id}
      />
      <p className="separator">|</p>
      <button className="report-button">Report</button>
    </div>
  );
};

export default QuestionListItemAnswerActions;
