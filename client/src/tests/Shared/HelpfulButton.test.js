import {act, render, fireEvent, waitFor, screen} from '@testing-library/react';
import HelpfulButton from '../../components/Shared/HelpfulButton/HelpfulButton.jsx';

test('it renders as expected', () => {
  const count = 10;

  render(<HelpfulButton
    helpfulness={count}
  />);

  const helpfulTitle = screen.getByTestId('helpful-title');
  const helpfulYesButton = screen.getByTestId('helpful-yes-button');
  const helpfulCount = screen.getByTestId('helpful-count');

  expect(helpfulTitle.innerHTML).toBe('Helpful?');
  expect(helpfulYesButton.innerHTML).toBe('Yes');
  expect(helpfulCount.innerHTML).toBe(`(${count})`);
});

test('it calls onHelpulButtonClick prop with the expected id when clicking on the button only once per session', () => {
  const onHelpulButtonClickSpy = jest.fn();
  const id = 1234;

  render(<HelpfulButton
    id={id}
    onHelpulButtonClick={onHelpulButtonClickSpy}
  />);

  const helpfulYesButton = screen.getByTestId('helpful-yes-button');

  fireEvent.click(helpfulYesButton, {});
  fireEvent.click(helpfulYesButton, {});

  expect(onHelpulButtonClickSpy).toHaveBeenCalledWith(id);
  expect(onHelpulButtonClickSpy).toHaveBeenCalledTimes(1);
});
