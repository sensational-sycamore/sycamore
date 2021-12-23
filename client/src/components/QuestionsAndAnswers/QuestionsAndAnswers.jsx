import React from 'react';
import './QuestionsAndAnswers.scss';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import SearchQuestions from './SearchQuestions/SearchQuestions.jsx';
import AddAnswerModal from './AddAnswerModal/AddAnswerModal.jsx';
import AddQuestionModal from './AddQuestionModal/AddQuestionModal.jsx';


const QuestionsAndAnswers = () => {
  return (
    <div className='questions-and-answers'>
      <SearchQuestions />
      <QuestionsList />
      <AddQuestionModal />
      <AddAnswerModal />
    </div>
  );
};

export default QuestionsAndAnswers;