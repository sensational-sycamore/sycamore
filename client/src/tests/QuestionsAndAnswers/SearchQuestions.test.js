import {act, render, fireEvent, waitFor, screen} from '@testing-library/react';
import SearchQuestions from '../../components/QuestionsAndAnswers/SearchQuestions/SearchQuestions.jsx';

test('renders the input with the expected placeholder', async () => {
  // Render the component to be tested
  render(<SearchQuestions />);

  // Once rendered, we can access the rendered component by JSDOM using "screen".
  // On this case, I'm using the JSDOM helper "getByPlaceholderText" to find the element.
  const searchInput = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');

  // Once I have the element, I can assert that it exists.
  expect(searchInput).toBeTruthy()
});

test('it calls setSearchQuery prop with the expected string when typing on the input', async () => {
  // Create a spy to pass as the setSearchQuery prop for SearchQuestions.
  const setSearchQuerySpy = jest.fn();

  // String to be used to fill the input.
  const testString = 'What time is it?';

  // Render the component to be tested passing in the setSearchQuerySpy as the setSearchQuery prop.
  render(<SearchQuestions setSearchQuery={setSearchQuerySpy} />);

  // select the input using its data-testid attribute
  const searchInput = screen.getByTestId('search-input');

  // use fireEvent to simulate a change event in the searchInput. Valid to point out that dom onchange calls the function its given with the event in the shape "evt.target.value".
  fireEvent.change(searchInput, {target: {value: testString}});

  // Assert that the input has the correct filled valued.
  expect(searchInput.value).toBe(testString);
  // Assert that the passed in function was called.
  expect(setSearchQuerySpy).toHaveBeenCalled();
  // Assert that the passed in function was called with the string typed into the input.
  expect(setSearchQuerySpy).toHaveBeenCalledWith(testString);
});
