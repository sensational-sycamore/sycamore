import React from 'react';
<<<<<<< HEAD
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

=======

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
>>>>>>> 4dacb97 (setting up Jest)

export default App;