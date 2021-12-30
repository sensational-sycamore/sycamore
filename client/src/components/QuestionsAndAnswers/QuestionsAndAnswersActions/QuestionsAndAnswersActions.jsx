import React from 'react';
import './QuestionsAndAnswersActions.scss';

const QuestionsAndAnswersActions = ({setShowAddQuestionModal}) => {
  const handleShowAddQuestionModal = () => {
    setShowAddQuestionModal(true);
  };

  return (
    <div>
      <button>More answered questions</button>
      <button onClick={handleShowAddQuestionModal}>Add a question</button>
    </div>
  );
};

export default QuestionsAndAnswersActions;
