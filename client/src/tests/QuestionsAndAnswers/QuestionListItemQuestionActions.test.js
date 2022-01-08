import {act, render, fireEvent, waitFor, screen} from '@testing-library/react';
import QuestionListItemQuestionActions from '../../components/QuestionsAndAnswers/QuestionListItemQuestionActions/QuestionListItemQuestionActions.jsx';

test('it renders as expected', () => {
  const onHelpulButtonClickSpy = jest.fn();
  const setShowAddAnswerModalSpy = jest.fn();
  const handleOpenAddAnswerModalSpy = jest.fn();
  const helpfulnessCount = 14;
  const id = 7;

  render(<QuestionListItemQuestionActions
    helpfulness={helpfulnessCount}
    id={id}
    onHelpulButtonClick={onHelpulButtonClickSpy}
    setShowAddAnswerModal={setShowAddAnswerModalSpy}
    handleOpenAddAnswerModal={handleOpenAddAnswerModalSpy}
  />);

  const addAnswerButton = screen.getByTestId('add-answer-button');
  const helpfulButton = screen.getByTestId('helpful-button');

  expect(addAnswerButton.innerHTML).toBe('Add answer');
  expect(helpfulButton).toBeTruthy();

});

test('it calls handleOpenAddAnswerModal and setShowAddAnswerModal props with the expected parameters', () => {
  const onHelpulButtonClickSpy = jest.fn();
  const setShowAddAnswerModalSpy = jest.fn();
  const handleOpenAddAnswerModalSpy = jest.fn();
  const helpfulnessCount = 14;
  const id = 7;

  render(<QuestionListItemQuestionActions
    helpfulness={helpfulnessCount}
    id={id}
    onHelpulButtonClick={onHelpulButtonClickSpy}
    setShowAddAnswerModal={setShowAddAnswerModalSpy}
    handleOpenAddAnswerModal={handleOpenAddAnswerModalSpy}
  />);

  const addAnswerButton = screen.getByTestId('add-answer-button');

  fireEvent.click(addAnswerButton, {});

  expect(handleOpenAddAnswerModalSpy).toHaveBeenCalledWith(id);
  expect(setShowAddAnswerModalSpy).toHaveBeenCalledWith(true);
});