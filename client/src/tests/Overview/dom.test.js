import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';



import Title from '../../components/Overview/subcomponents/Title.jsx';
import Category from '../../components/Overview/subcomponents/Category.jsx';
import Description from '../../components/Overview/subcomponents/Description.jsx';
import Price from '../../components/Overview/subcomponents/Price.jsx';
import Reviews from '../../components/Overview/subcomponents/Reviews.jsx';
import SizeSelector from '../../components/Overview/subcomponents/SizeSelector.jsx';
import QuantitySelector from '../../components/Overview/subcomponents/QuantitySelector.jsx';
import AddToCart from '../../components/Overview/subcomponents/AddToCart.jsx';

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

it('Reviews renders with correct review count', () => {
  act(() => {
    render(<Reviews reviews={[]} />, container);
  });

  expect(container.textContent).toBe('Read all 0 reviews');

  act(() => {
    render(<Reviews reviews={[1,2,3]} />, container);
  });

  expect(container.textContent).toBe('Read all 3 reviews');
  expect(screen.getByText('Read all 3 reviews').closest('a')).toHaveAttribute('href', '#ratings-and-reviews');

});

it('SizeSelector renders with out of stock if given empty array in prop', () => {
  act(() => {
    render(<SizeSelector currStyle={{skus: []}} />, container);
  });
  expect(container.textContent).toBe('OUT OF STOCK');
});

it('Quantity selector renders with link', () => {
  act(() => {
    render(<QuantitySelector skuNQuantity={{}} />, container);
  });
  expect(container.textContent).toBe('SELECT QUANTITY');
});

it('AddToCart selector renders with link', () => {
  act(() => {
    render(<AddToCart currSku='' currQuantity='' />, container);
  });
  expect(container.textContent).toBe('Add to Cart');
});

