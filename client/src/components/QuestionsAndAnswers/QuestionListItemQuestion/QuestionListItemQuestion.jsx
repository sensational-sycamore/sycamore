import React from 'react';
import './QuestionListItemQuestion.scss';
import QuestionListItemQuestionActions from '../QuestionListItemQuestionActions/QuestionListItemQuestionActions.jsx';

const QuestionListItemQuestion = ({author, question, date, helpfulness, id, reported}) => {
  return (
    <div>
      <p>{question}</p>
      <QuestionListItemQuestionActions
        helpfulness={helpfulness}
        id={id}
      />
    </div>
  );
};

export default QuestionListItemQuestion;
