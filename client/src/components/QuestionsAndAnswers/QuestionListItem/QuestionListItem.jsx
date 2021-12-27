import React from 'react';
import './QuestionListItem.scss';
import QuestionListItemAnswer from '../QuestionListItemAnswer/QuestionListItemAnswer.jsx';
import QuestionListItemQuestion from '../QuestionListItemQuestion/QuestionListItemQuestion.jsx';

const QuestionsListItem = () => {
  return (
    <li>
      <QuestionListItemQuestion />
      <ul>
        <QuestionListItemAnswer />
        <QuestionListItemAnswer />
      </ul>
    </li>
  );
};

export default QuestionsListItem;
