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
  const [showMoreQuestionAndAnswers, setShowMoreQuestionAndAnswers] = useState(false);

  useEffect(() => {
    fetchAllQuestions();
  }, [productId]);

  const onQuestionHelpulButtonClick = (id) => {
    axios.put(`/qa/questions/${id}/helpful`)
      .then(res => fetchAllQuestions());
  };

  const onAnswerHelpulButtonClick = (id) => {
    axios.put(`/qa/answers/${id}/helpful`)
      .then(res => fetchAllQuestions());
  };

  const fetchAllQuestions = () => {
    axios(`http://localhost:3000/qa/questions?product_id=${productId}`)
      .then(res => {
        setQuestionsAndAnswers(res.data.results);
      });
  };

  const getQuestionsAndAnswers = () => {
    if (showMoreQuestionAndAnswers) {
      return questionsAndAnswers;
    } else {
      return questionsAndAnswers.slice(0, 4);
    }
  };

  return (
    <div className='questions-and-answers'>
      <h2>Questions & Answers</h2>
      {/* <SearchQuestions /> */}
      <QuestionsList
        questionsAndAnswers={getQuestionsAndAnswers()}
        onQuestionHelpulButtonClick={onQuestionHelpulButtonClick}
        onAnswerHelpulButtonClick={onAnswerHelpulButtonClick}
        setShowAddAnswerModal={setShowAddAnswerModal}
      />
      {/* <QuestionsAndAnswersActions
        setShowAddQuestionModal={setShowAddQuestionModal}
        setShowMoreQuestionAndAnswers={setShowMoreQuestionAndAnswers}
        showMoreQuestionAndAnswers={showMoreQuestionAndAnswers}
      />

      {showAddQuestionModal && <AddQuestionModal
        productId={productId}
        setShowAddQuestionModal={setShowAddQuestionModal}
      />}
      {showAddAnswerModal && <AddAnswerModal />} */}
    </div>
  );
};

export default QuestionsAndAnswers;
