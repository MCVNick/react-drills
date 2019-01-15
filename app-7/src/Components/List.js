import React, { Component } from 'react';

class App extends Component {
  render() {
    let myList = this.props.array.map((element, index) => <h2 key={index+element}>{element}</h2>)
    return (
      <div>
          {myList}
      </div>
    );
  }
}

export default App;
