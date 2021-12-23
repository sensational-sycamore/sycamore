import React from 'react';
import OverviewCss from './style/overview.css';

const Overview = (props) => (
  <div>
    <hr />
    <h1 className="title">This is the Overview Div</h1>
    <div>Product id = {props.productId}</div>
    <hr />
  </div>
);

export default Overview;