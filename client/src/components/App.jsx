import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Overview from './Overview/Overview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 63610
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Overview productId={this.state.productId}/>
        <QuestionsAndAnswers productId={this.state.productId}/>
        <RatingsAndReviews productId={this.state.productId}/>
      </div>
    );
  }
}


export default App;

