import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./components/ListBooks";
import SearchAndAdd from "./components/SearchAndAdd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchAndAdd} />
      </div>
    );
  }
}

export default App;
