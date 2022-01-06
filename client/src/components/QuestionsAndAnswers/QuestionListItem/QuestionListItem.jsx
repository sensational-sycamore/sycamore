import React, { useState } from 'react';
import './QuestionListItem.scss';
import QuestionListItemAnswer from '../QuestionListItemAnswer/QuestionListItemAnswer.jsx';
import QuestionListItemQuestion from '../QuestionListItemQuestion/QuestionListItemQuestion.jsx';

const QuestionsListItem = ({
  id,
  author,
  question,
  date,
  helpfulness,
  reported,
  answers,
  onQuestionHelpulButtonClick,
  onAnswerHelpulButtonClick,
  setShowAddAnswerModal,
  handleOpenAddAnswerModal
}) => {

  const [showMoreAnswers, setShowMoreAnswers] = useState(false);

  const answersIds = Object.keys(answers);

  const getAnswers = () => {
    if (showMoreAnswers) {
      return answersIds;
    } else {
      return answersIds.slice(0, 2);
    }
  };

  const handleShowMoreAnswers = () => {
    setShowMoreAnswers(!showMoreAnswers);
  };

  return (
    <li className="questions-list-item">
      <div className="question-wrapper">
        <h3>Q:</h3>
        <QuestionListItemQuestion
          author={author}
          question={question}
          date={date}
          helpfulness={helpfulness}
          id={id}
          reported={reported}
          onHelpulButtonClick={onQuestionHelpulButtonClick}
          setShowAddAnswerModal={setShowAddAnswerModal}
          handleOpenAddAnswerModal={handleOpenAddAnswerModal}
        />
      </div>
      { !!Object.keys(answers).length && <div className="answer-wrapper">
        <h3>A:</h3>
        <ul className="answer-list">
          {getAnswers().map(answerId => {
            const answer = answers[answerId];

            return (
              <QuestionListItemAnswer
                key={answer.id}
                answer={answer.body}
                date={answer.date}
                helpfulness={answer.helpfulness}
                id={answer.id}
                images={answer.photos}
                onHelpulButtonClick={onAnswerHelpulButtonClick}
                author={answer.answerer_name}
              />
            );
          })}
        </ul>
      </div>}
      {
        Object.keys(answers).length > 2 &&
        <button onClick={handleShowMoreAnswers}>{showMoreAnswers ? 'Show less answers' : 'Load more answers'}</button>
      }

    </li>
  );
};

export default QuestionsListItem;
