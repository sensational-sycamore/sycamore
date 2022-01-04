// import React from 'react';
// import renderer from 'react-test-renderer';
// import react-testing methods
import {act, render, fireEvent, waitFor, screen} from '@testing-library/react';

// add custom jest matchers from jest-dom
// import '@testing-library/jest-dom';

// the component to test
import SearchQuestions from '../../components/QuestionsAndAnswers/SearchQuestions/SearchQuestions.jsx';

// const


test('renders the expected placeholder', async () => {
  const setSearchQuery = jest.fn();

  render(<SearchQuestions
    setSearchQuery={setSearchQueryn}
  />);

  const searchInput = screen.getByPlaceholderText("HAVE A QUESTION? SEARCH FOR ANSWERS...");

  expect(searchInput).toBeTruthy()
});

test('to call setSearchQuery with the expected string when typing on the input', async () => {})
