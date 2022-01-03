//snapshot testing

import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../../components/Overview/subcomponents/Title.jsx';
import Category from '../../components/Overview/subcomponents/Category.jsx';
import Description from '../../components/Overview/subcomponents/Description.jsx';
import Reviews from '../../components/Overview/subcomponents/Reviews.jsx';
import Price from '../../components/Overview/subcomponents/Price.jsx';


// fake product object
const fakeProductDetails = {
  'id': 63618,
  'campus': 'hr-sfo',
  'name': 'Infinity Stone',
  'slogan': 'Reality is often disappointing. That is, it was. Now, reality can be whatever I want.',
  'description': 'The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.',
  'category': 'Accessories',
  'default_price': '50000000.00',
  'created_at': '2021-12-21T17:19:40.556Z',
  'updated_at': '2021-12-21T17:19:40.556Z',
  'features': []
};

it('Title component renders correctly', () => {
  const tree = renderer
    .create(<Title product={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Category component renders correctly', () => {
  const tree = renderer
    .create(<Category product={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Description component renders correctly', () => {
  const tree = renderer
    .create(<Description product={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Reviews component renders correctly', () => {
  const tree = renderer
    .create(<Reviews product={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Price component renders correctly', () => {
  const tree = renderer
    .create(<Price product={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
