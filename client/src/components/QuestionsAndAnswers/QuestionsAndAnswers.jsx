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
        setQuestionsAndAnswers(res.data.results);
      });
  }, [productId]);

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

  const onQuestionHelpulButtonClick = (id) => {
    console.log('onHelpulButtonClick', id);
    // https://localhost:3000/qa/questions/553823/helpful
  };

  const onAnswerHelpulButtonClick = (id) => {
    console.log('onAnswerHelpulButtonClick', id);
  };

  return (
    <div className='questions-and-answers'>
      <h2>Questions & Answers</h2>
      <SearchQuestions />
      <QuestionsList
        questionsAndAnswers={questionsAndAnswers}
        onQuestionHelpulButtonClick={onQuestionHelpulButtonClick}
        onAnswerHelpulButtonClick={onAnswerHelpulButtonClick}
        setShowAddAnswerModal={setShowAddAnswerModal}
      />
      <QuestionsAndAnswersActions
        setShowAddQuestionModal={setShowAddQuestionModal}
      />

      {showAddQuestionModal && <AddQuestionModal />}
      {showAddAnswerModal && <AddAnswerModal />}
    </div>
  );
};

export default QuestionsAndAnswers;
