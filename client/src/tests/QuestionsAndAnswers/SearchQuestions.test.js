import React from 'react';
import renderer from 'react-test-renderer';
import SearchQuestions from '../components/SearchQuestions/SearchQuestions.jsx';

test('SearchQuestions renders as expected', () => {
  const component = renderer.create(
    <SearchQuestions />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});