// import Overview from '../../components/Overview/Overview.jsx';
// import React from 'react';
// import ReactDOM from 'react-dom';
// /**
//  * @jest-environment jsdom
//  */

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Overview/>, div);

// });



import somefunc from './somefunc.js';

test('adds 2 nums', () => {
  expect(somefunc.add(2,2)).toBe(4);
});