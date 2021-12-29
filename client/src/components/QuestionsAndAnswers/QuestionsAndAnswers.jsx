import React, { useState } from 'react';
import './QuestionsAndAnswers.scss';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchQuestions from './SearchQuestions/SearchQuestions.jsx';
import AddAnswerModal from './AddAnswerModal/AddAnswerModal.jsx';
import AddQuestionModal from './AddQuestionModal/AddQuestionModal.jsx';
import QuestionsAndAnswersActions from './QuestionsAndAnswersActions/QuestionsAndAnswersActions.jsx';


const QuestionsAndAnswers = () => {
  const [showAddAnswerModal, setShowAddAnswerModal] = useState(false);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);

  const renderAddQuestionModal = () => {
    if (showAddQuestionModal) {
      return <AddQuestionModal />;
    }
    return null;
  };

  const renderAddAnswerModal = () => {
    if (showAddAnswerModal) {
      return <AddAnswerModal />;
    }
    return null;
  };

  return (
    <div className='questions-and-answers'>
      <h2>Questions & Answers</h2>
      <SearchQuestions />
      <QuestionsList />
      <QuestionsAndAnswersActions />
      {renderAddQuestionModal()}
      {renderAddAnswerModal()}
    </div>
  );
};

export default QuestionsAndAnswers;
