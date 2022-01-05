//snapshot testing

import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../../components/Overview/subcomponents/Title.jsx';
import Category from '../../components/Overview/subcomponents/Category.jsx';
import Description from '../../components/Overview/subcomponents/Description.jsx';
import Reviews from '../../components/Overview/subcomponents/Reviews.jsx';
import Price from '../../components/Overview/subcomponents/Price.jsx';
import Overview from '../../components/Overview/Overview.jsx';
import Related from '../../components/Related/Related.jsx';
import Cards from '../../components/Related/Cards.jsx';
import Card from '../../components/Related/Card.jsx';


// fake product data
const fakeProducts = [{'id':63609,'campus':'hr-sfo','name':'Camo Onesie','slogan':'Blend in to your crowd','description':'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.','category':'Jackets','default_price':'140.00','created_at':'2021-12-21T17:19:40.556Z','updated_at':'2021-12-21T17:19:40.556Z'},{'id':63610,'campus':'hr-sfo','name':'Bright Future Sunglasses','slogan':'You\'ve got to wear shades','description':'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.','category':'Accessories','default_price':'69.00','created_at':'2021-12-21T17:19:40.556Z','updated_at':'2021-12-21T17:19:40.556Z'}];

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

var fakeStyles = {'product_id': '63610', 'results': [{'style_id': 391652, 'name': 'Black Lenses & Black Frame', 'original_price': '69.00', 'sale_price': null, 'default?': false, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}, {'style_id': 391653, 'name': 'Black Lenses & Gold Frame', 'original_price': '69.00', 'sale_price': null, 'default?': true, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}, {'style_id': 391654, 'name': 'Gold Lenses & Black Frame', 'original_price': '69.00', 'sale_price': null, 'default?': false, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}, {'style_id': 391655, 'name': 'Gold Lenses & Gold Frame', 'original_price': '69.00', 'sale_price': null, 'default?': false, 'photos': [{'thumbnail_url': null, 'url': null}], 'skus': {'null': {'quantity': null, 'size': null}}}]};

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
    .create(<Price currStyle={fakeStyles.results[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Overview component renders correctly', () => {
  const tree = renderer
    .create(<Overview productId={63613}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Related component renders correctly', () => {
  const tree = renderer
    .create(<Related productId={63613}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Cards component renders correctly', () => {
  const tree = renderer
    .create(<Cards products={fakeProducts} currProduct={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('Card component renders correctly', () => {
  const tree = renderer
    .create(<Card products={fakeProducts} currProduct={fakeProductDetails}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
