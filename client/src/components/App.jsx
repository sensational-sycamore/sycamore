import React from 'react';
import Overview from './Overview/Overview.jsx';

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
      </div>
    );
  }
}



const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;