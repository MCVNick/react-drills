import React, { Component } from 'react';
import './App.css';
import './Components/ShowInputtedText'
import ShowInputtedText from './Components/ShowInputtedText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowInputtedText />
      </div>
    );
  }
}

export default App;
