import React from 'react';
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
  setShowAddAnswerModal
}) => {
  console.log('Question List Item question', question);
  console.log('Question List Item answers', answers);
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
        />
      </div>
      { !!Object.keys(answers).length && <div className="answer-wrapper">
        <h3>A:</h3>
        <ul className="answer-list">
          {Object.keys(answers).map(answerId => {
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
    </li>
  );
};

export default QuestionsListItem;
