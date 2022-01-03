import React from 'react';
import './QuestionsAndAnswersActions.scss';

const QuestionsAndAnswersActions = ({setShowAddQuestionModal, setShowMoreQuestionAndAnswers, showMoreQuestionAndAnswers}) => {
  const handleShowAddQuestionModal = () => {
    setShowAddQuestionModal(true);
  };

  const onLoadMoreQuestions = () => {
    setShowMoreQuestionAndAnswers(!showMoreQuestionAndAnswers);
  };

  return (
    <div>
      <button onClick={onLoadMoreQuestions}>More answered questions</button>
      <button onClick={handleShowAddQuestionModal}>Add a question +</button>
    </div>
  );
};

export default QuestionsAndAnswersActions;
