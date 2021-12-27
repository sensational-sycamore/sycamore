import React from 'react';
import './QuestionListItemQuestion.scss';
import QuestionListItemQuestionActions from '../QuestionListItemQuestionActions/QuestionListItemQuestionActions.jsx';

const QuestionListItemQuestion = () => {
  return (
    <div>
      <p>Q1:</p>
      <QuestionListItemQuestionActions />
    </div>
  );
};

export default QuestionListItemQuestion;
