import React from 'react';
import './QuestionListItem.scss';
import QuestionListItemAnswer from '../QuestionListItemAnswer/QuestionListItemAnswer.jsx';
import QuestionListItemQuestion from '../QuestionListItemQuestion/QuestionListItemQuestion.jsx';

const QuestionsListItem = ({author, question, date, helpfulness, id, reported, answers}) => {
  return (
    <li>
      <div>
        <h3>Question:</h3>
        <QuestionListItemQuestion
          author={author}
          question={question}
          date={date}
          helpfulness={helpfulness}
          id={id}
          reported={reported}
        />
      </div>
      <div>
        <h3>Answer(s):</h3>
        <ul>
          {Object.keys(answers).map(answerId => {
            const answer = answers[answerId];

            return (
              <QuestionListItemAnswer
                key={answer.id}
                answer={answer.body}
                date={answer.date}
                helpfulness={answer.helpfulness}
                id={answer.id}
                photos={answer.photos}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default QuestionsListItem;
