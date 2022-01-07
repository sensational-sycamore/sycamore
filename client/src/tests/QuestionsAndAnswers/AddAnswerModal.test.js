import {act, render, fireEvent, waitFor, screen} from '@testing-library/react';
import AddAnswerModal from '../../components/QuestionsAndAnswers/AddAnswerModal/AddAnswerModal.jsx';
import mockAxios from "jest-mock-axios";


test('it sets the product name with the data returned by the API on mount', async () => {
  const handleCloseAnswerModalSpy = jest.fn();
  const productId = 7;
  const questionBody = 'Why';
  const questionId = 6000;

  // given
  const name = {
    data: {
      name: 'Fernanda'
    }
  };

  mockAxios.get.mockResolvedValueOnce(name);

  await act(async () => {
    await render(<AddAnswerModal
      handleCloseAnswerModal={handleCloseAnswerModalSpy}
      productId={productId}
      questionBody={questionBody}
      questionId={questionId}
    />);
  });

  const productName = screen.getByTestId('product-name');

  expect(productName.innerHTML).toBe('Fernanda');
});

test('it calls handleCloseAnswerModal when clicking on the close button (x)', () => {
  const handleCloseAnswerModalSpy = jest.fn();

  render(<AddAnswerModal
    handleCloseAnswerModal={handleCloseAnswerModalSpy}
  />);

  const closeButton = screen.getByTestId('close-button');

  fireEvent.click(closeButton, {});

  expect(closeButton.innerHTML).toBe('x');
  expect(handleCloseAnswerModalSpy).toHaveBeenCalledWith(false);
});

test('it updates the char count when entering content on the answer input', () => {

  render(<AddAnswerModal />);

  const answerInput = screen.getByTestId('answer-input');
  const answerInputCounter = screen.getByTestId('answer-input-counter');

  expect(answerInputCounter.innerHTML).toBe('1000 characters');

  fireEvent.change(answerInput, {target: {value: 'nanda'}});

  expect(answerInputCounter.innerHTML).toBe('995 characters');
});

test('its answer input will only accept up to 1000 chars', () => {});

test('it updates the char count when entering content on the nickname input', () => {
  render(<AddAnswerModal />);

  const nicknameInput = screen.getByTestId('nickname-input');
  const nicknameInputCounter = screen.getByTestId('nickname-input-counter');

  expect(nicknameInputCounter.innerHTML).toBe('60 characters');

  fireEvent.change(nicknameInput, {target: {value: 'nanda'}});

  expect(nicknameInputCounter.innerHTML).toBe('55 characters');
});

test('its nickname input will only accept up to 60 chars', () => {});

test('it updates the char count when entering content on the email input', () => {
  render(<AddAnswerModal />);

  const emailInput = screen.getByTestId('email-input');
  const emailInputCounter = screen.getByTestId('email-input-counter');

  expect(emailInputCounter.innerHTML).toBe('60 characters');

  fireEvent.change(emailInput, {target: {value: 'nanda'}});

  expect(emailInputCounter.innerHTML).toBe('55 characters');
});

test('its email input will only accept up to 60 chars', () => {});

test('it shows the expected errors alert when fields are empty', () => {});

test('it shows the expected error when the email is invalid', () => {});

test('it posts the data if the input are filled correctly', () => {});