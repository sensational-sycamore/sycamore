import React from 'react';
import renderer from 'react-test-renderer';
import AddAnswerModal from '../components/AddAnswerModal/AddAnswerModal.jsx';

test('AddAnswerModal renders as expected', () => {
  const component = renderer.create(
    <AddAnswerModal />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});