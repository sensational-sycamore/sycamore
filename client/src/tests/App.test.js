import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App.jsx';

test('App renders as expected', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
