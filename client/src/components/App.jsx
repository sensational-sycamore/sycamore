import React from 'react';
import Overview from './Overview/Overview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: 63609
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview productId={this.state.productId}/>
        <QuestionsAndAnswers productId={this.state.productId}/>
      </div>
    );
  }
}

export default App;
