import React from 'react';
import './QuestionListItemQuestionActions.scss';
import HelpfulButton from '../../Shared/HelpfulButton/HelpfulButton.jsx';

const QuestionListItemQuestionActions = ({
  helpfulness,
  id,
  onHelpulButtonClick,
  setShowAddAnswerModal,
  handleOpenAddAnswerModal
}) => {
  const onOpenAddAnswerModal = () => {
    handleOpenAddAnswerModal(id);
    setShowAddAnswerModal(true);
  };

  return (
    <div className="question-actions">
      <HelpfulButton
        helpfulness={helpfulness}
        id={id}
        onHelpulButtonClick={onHelpulButtonClick}
      />
      <p className="separator">|</p>
      <button data-testid='add-answer-button' className="add-answer-button" onClick={onOpenAddAnswerModal}>Add answer</button>
    </div>
  );
};

export default QuestionListItemQuestionActions;
