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
});

test('it updates the char count when entering content on the answer input', () => {});

test('its answer input will only accept up to 1000 chars', () => {});

test('it updates the char count when entering content on the nickname input', () => {});

test('its nickname input will only accept up to 60 chars', () => {});

test('it updates the char count when entering content on the email input', () => {});

test('its email input will only accept up to 60 chars', () => {});

test('it shows the expected errors alert when fields are empty', () => {});

test('it shows the expected error when the email is invalid', () => {});

test('it posts the data if the input are filled correctly', () => {});