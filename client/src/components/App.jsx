import React from 'react';
import Overview from './Overview/Overview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 63614
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview productId={this.state.productId}/>
        <QuestionsAndAnswers productId={this.state.productId}/>
        <RatingsAndReviews productId={this.state.productId}/>
      </div>
    );
  }
}

export default App;
