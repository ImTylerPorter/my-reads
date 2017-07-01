import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./components/ListBooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ListBooks} />
      </div>
    );
  }
}

export default App;
