import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Title from '../../components/Overview/subcomponents/Title.jsx';
import Category from '../../components/Overview/subcomponents/Category.jsx';
import Description from '../../components/Overview/subcomponents/Description.jsx';
import Price from '../../components/Overview/subcomponents/Price.jsx';
import Reviews from '../../components/Overview/subcomponents/Reviews.jsx';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Title renders with a name', () => {
  act(() => {
    render(<Title name='a product'/>, container);
  });
  expect(container.textContent).toBe('a product');
});

it('Category renders with a category name', () => {
  act(() => {
    render(<Category category='fruit'/>, container);
  });
  expect(container.textContent).toBe('fruit');
});

it('Price renders with original Price', () => {
  act(() => {
    render(<Price originalPrice='69.00'/>, container);
  });
  expect(container.textContent).toBe('$69.00');
});

it('Price renders with sales price and original price when given both', () => {
  act(() => {
    render(<Price originalPrice='69.00' salePrice='59.00'/>, container);
  });
  expect(container.textContent).toBe('$59.00$69.00');
});

it('Description renders with slogan and description', () => {
  act(() => {
    render(<Description slogan='slogan' description='description'/>, container);
  });
  expect(container.textContent).toBe('slogandescription');
});

it('Reviews renders with link', () => {
  act(() => {
    render(<Reviews reviews={[]} />, container);
  });
  expect(container.textContent).toBe('Read all reviews');
});
