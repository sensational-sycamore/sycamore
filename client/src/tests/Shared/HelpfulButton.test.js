import React from 'react';
import renderer from 'react-test-renderer';

// The test function is invoked with a string argument describing the test, and a callback function with the test content.
test('QuestionsList renders as expected', () => {
  const component = renderer.create(
    <HelpfulButton />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
