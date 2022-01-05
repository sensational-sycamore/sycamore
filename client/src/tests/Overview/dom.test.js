import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Title from '../../components/Overview/subcomponents/Title.jsx';
import Category from '../../components/Overview/subcomponents/Category.jsx';
import Description from '../../components/Overview/subcomponents/Description.jsx';
import Price from '../../components/Overview/subcomponents/Price.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with a name', () => {
  act(() => {
    render(<Title product={{name: 'a product'}}/>, container);
  });
  expect(container.textContent).toBe('a product');
});

it('renders with a category name', () => {
  act(() => {
    render(<Category product={{category: 'fruit'}}/>, container);
  });
  expect(container.textContent).toBe('fruit');
});

it('renders with original Price', () => {
  act(() => {
    render(<Price currStyle={{ 'original_price': '69.00' }}/>, container);
  });
  expect(container.textContent).toBe('$69.00');
});

it('renders with original Price', () => {
  act(() => {
    render(<Price currStyle={{ 'original_price': '69.00', 'sale_price': '59.00' }}/>, container);
  });
  expect(container.textContent).toBe('$59.00$69.00');
});