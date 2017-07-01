import React, { Component } from 'react';
import './App.css';
import ListBooks from './components/ListBooks'


class App extends Component {

  render() {
    return (
      <div className="App">
        <ListBooks />
      </div>
    );
  }
}

export default App;
