import React from 'react';
import './QuestionsList.scss';
import QuestionListItem from '../QuestionListItem/QuestionListItem.jsx';

const QuestionsList = ({questionsAndAnswers}) => {
  return (
    <>
      <ul>
        {questionsAndAnswers.map(qa => {
          console.log(qa)
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
            />);
        })}
      </ul>
      <button>Load more answers</button>
    </>
  );
};

export default QuestionsList;
