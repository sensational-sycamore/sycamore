import React from 'react';
import './QuestionListItemQuestion.scss';
import QuestionListItemQuestionActions from '../QuestionListItemQuestionActions/QuestionListItemQuestionActions.jsx';

const QuestionListItemQuestion = ({
  author,
  question,
  date,
  helpfulness,
  id,
  reported,
  onHelpulButtonClick,
  setShowAddAnswerModal
}) => {
  return (
    <div className="question">
      <p className="question-text">{question}</p>
      <QuestionListItemQuestionActions
        helpfulness={helpfulness}
        id={id}
        onHelpulButtonClick={onHelpulButtonClick}
        setShowAddAnswerModal={setShowAddAnswerModal}
      />
    </div>
  );
};

export default QuestionListItemQuestion;
