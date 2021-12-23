import React from 'react';
import renderer from 'react-test-renderer';
import AddQuestionModal from '../components/AddQuestionModal/AddQuestionModal.jsx';

test('AddQuestionModal renders as expected', () => {
  const component = renderer.create(
    <AddQuestionModal />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});