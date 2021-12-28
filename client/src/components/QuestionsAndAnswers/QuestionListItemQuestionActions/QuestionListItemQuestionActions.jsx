import React from 'react';
import './QuestionListItemQuestionActions.scss';
import HelpfulButton from '../../Shared/HelpfulButton/HelpfulButton.jsx';

const QuestionListItemQuestionActions = ({
  helpfulness,
  id,
  onHelpulButtonClick,
  setShowAddAnswerModal
}) => {
  const handleOpenAddAnswerModal = () => {
    setShowAddAnswerModal(true);
  };

  return (
    <div className="question-actions">
      <HelpfulButton
        helpfulness={helpfulness}
        id={id}
        onHelpulButtonClick={onHelpulButtonClick}
      />
      <p>|</p>
      <button onClick={handleOpenAddAnswerModal}>Add answer</button>
    </div>
  );
};

export default QuestionListItemQuestionActions;
