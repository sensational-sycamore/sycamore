import {act, render, fireEvent, waitFor, screen} from '@testing-library/react';
import QuestionListItemAnswerActions from '../../components/QuestionsAndAnswers/QuestionListItemAnswerActions/QuestionListItemAnswerActions.jsx';

test('it renders the expect date', () => {
  const date = '2018-10-12T00:00:00.000Z';

  render(<QuestionListItemAnswerActions
    date={date}
  />);

  const answerDate = screen.getByTestId('date');

  expect(answerDate.innerHTML).toBe('October 11th 2018');
});