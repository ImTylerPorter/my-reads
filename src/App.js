import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'




class App extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => this.listBooks(books))
    }

    listBooks(books) {
        this.setState({ books })
        console.log(books)
    }

  render() {
    return (
      <div className="App">
        <ListBooks books={this.state.books} />

      </div>
    );
  }
}

export default App;
