import React from 'react';
import renderer from 'react-test-renderer';
import QuestionsList from '../components/QuestionsList/QuestionsList.jsx';

test('QuestionsList renders as expected', () => {
  const component = renderer.create(
    <QuestionsList />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});