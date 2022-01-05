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
  const [answerModalQuestionId, setAnswerModalQuestionId] = useState(null);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [showMoreQuestionAndAnswers, setShowMoreQuestionAndAnswers] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    if (searchQuery.length > 2) {
      return questionsAndAnswers.filter(qa => qa.question_body.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (!showMoreQuestionAndAnswers) {
      return questionsAndAnswers.slice(0, 4);
    }
    return questionsAndAnswers;
  };

  const handleOpenAddAnswerModal = (questionId) => {
    // set the state
    setAnswerModalQuestionId(questionId);
    setShowAddAnswerModal(true);
  };

  const handleCloseAnswerModal = () => {
    setAnswerModalQuestionId(null);
    setShowAddAnswerModal(false);
  };

  const getQuestionBody = () => {
    const question = questionsAndAnswers.find(qa => qa.question_id === answerModalQuestionId);
    return question ? question.question_body : '';
  };

  return (
    <div className='questions-and-answers'>
      <h2>Questions & Answers</h2>
      <SearchQuestions
        questionsAndAnswers={getQuestionsAndAnswers()}
        setSearchQuery={setSearchQuery}
      />
      <QuestionsList
        questionsAndAnswers={getQuestionsAndAnswers()}
        onQuestionHelpulButtonClick={onQuestionHelpulButtonClick}
        onAnswerHelpulButtonClick={onAnswerHelpulButtonClick}
        setShowAddAnswerModal={setShowAddAnswerModal}
        handleOpenAddAnswerModal={handleOpenAddAnswerModal}
      />
      <QuestionsAndAnswersActions
        setShowAddQuestionModal={setShowAddQuestionModal}
        setShowMoreQuestionAndAnswers={setShowMoreQuestionAndAnswers}
        showMoreQuestionAndAnswers={showMoreQuestionAndAnswers}
      />

      {showAddQuestionModal && <AddQuestionModal
        productId={productId}
        setShowAddQuestionModal={setShowAddQuestionModal}
      />}
      {showAddAnswerModal && <AddAnswerModal
        productId={productId}
        handleCloseAnswerModal={handleCloseAnswerModal}
        questionBody={getQuestionBody()}
        questionId={answerModalQuestionId}
      />}
    </div>
  );
};

export default QuestionsAndAnswers;
