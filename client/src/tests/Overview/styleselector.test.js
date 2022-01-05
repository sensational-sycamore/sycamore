import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import StyleSelector from '../../components/Overview/subcomponents/StyleSelector.jsx';

describe('StyleSelector', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  var fakeStyles = {'product_id': '63610', 'results': [{'style_id': 391652, 'name': 'Black Lenses & Black Frame', 'original_price': '69.00', 'sale_price': null, 'default?': false, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}, {'style_id': 391653, 'name': 'Black Lenses & Gold Frame', 'original_price': '69.00', 'sale_price': null, 'default?': true, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}, {'style_id': 391654, 'name': 'Gold Lenses & Black Frame', 'original_price': '69.00', 'sale_price': null, 'default?': false, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}, {'style_id': 391655, 'name': 'Gold Lenses & Gold Frame', 'original_price': '69.00', 'sale_price': null, 'default?': false, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}]};

  let count = 0;

  const clickIncreaseCount = () => {
    count++;
  };

  it('can render', () => {
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(<StyleSelector styles={fakeStyles.results} currStyle={fakeStyles.results[0]} handleStyleSelect={clickIncreaseCount}/>, container);
    });
    const label = container.querySelector('h4');
    const img = container.querySelector('#styleImage');
    expect(label.textContent).toBe('STYLE >  Black Lenses & Black Frame');

    act(() => {
      img.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(count).toBeGreaterThan(0);
  });

});
