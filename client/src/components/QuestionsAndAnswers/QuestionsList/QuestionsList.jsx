import React from 'react';
import './QuestionsList.scss';
import QuestionListItem from '../QuestionListItem/QuestionListItem.jsx';

const QuestionsList = ({
  questionsAndAnswers,
  onQuestionHelpulButtonClick,
  onAnswerHelpulButtonClick,
  setShowAddAnswerModal,
  handleOpenAddAnswerModal
}) => {

  return (
    <>
      <ul className="question-list">
        {questionsAndAnswers.map(qa => {
          return (
            <QuestionListItem
              key={qa.question_id}
              author={qa.asker_name}
              question={qa.question_body}
              date={qa.question_date}
              helpfulness={qa.question_helpfulness}
              id={qa.question_id}
              reported={qa.reported}
              answers={qa.answers}
              onQuestionHelpulButtonClick={onQuestionHelpulButtonClick}
              onAnswerHelpulButtonClick={onAnswerHelpulButtonClick}
              setShowAddAnswerModal={setShowAddAnswerModal}
              handleOpenAddAnswerModal={handleOpenAddAnswerModal}
            />);
        })}
      </ul>
    </>
  );
};

export default QuestionsList;
