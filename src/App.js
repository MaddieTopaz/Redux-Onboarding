import React, { Component } from 'react';
import Counter from './store/counter/Counter';
import FunctionalCounter from './store/functional-counter/FunctionalCounter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <FunctionalCounter/>
      </div>
    );
  }
}

export default App;
