import React from 'react';
import ReactDOM from 'react-dom';
import ProductBreakdown from './../ProductBreakdown';
import { isTSAnyKeyword } from '@babel/types';
/**
 * @jest-environment jsdom
 */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductBreakdown/>, div);

});
