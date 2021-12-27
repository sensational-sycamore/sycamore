import React from 'react';
import './QuestionsList.scss';
import QuestionListItem from '../QuestionListItem/QuestionListItem.jsx';

const QuestionsList = () => {
  return (
    <>
      <ul>
        <QuestionListItem />
        <QuestionListItem />
      </ul>
      <button>Load more answers</button>
    </>
  );
};

export default QuestionsList;
