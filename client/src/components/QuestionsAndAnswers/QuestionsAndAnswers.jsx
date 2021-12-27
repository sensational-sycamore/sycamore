import React, { useState, useEffect } from 'react';
import './QuestionsAndAnswers.scss';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchQuestions from './SearchQuestions/SearchQuestions.jsx';
import AddAnswerModal from './AddAnswerModal/AddAnswerModal.jsx';
import AddQuestionModal from './AddQuestionModal/AddQuestionModal.jsx';
import QuestionsAndAnswersActions from './QuestionsAndAnswersActions/QuestionsAndAnswersActions.jsx';
import axios from 'axios';


const QuestionsAndAnswers = ({productId}) => {
  const [showAddAnswerModal, setShowAddAnswerModal] = useState(false);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/qa/questions?product_id=${productId}&page=1&count=5`)
      .then(res => {
        const qa = res.data.results;
        setQuestionsAndAnswers(qa);
      });
  }, []);

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
      <QuestionsList
        questionsAndAnswers={questionsAndAnswers}
      />
      <QuestionsAndAnswersActions />
      {renderAddQuestionModal()}
      {renderAddAnswerModal()}
    </div>
  );
};

export default QuestionsAndAnswers;
