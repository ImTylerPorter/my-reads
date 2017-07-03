import React, { Component } from "react";
import { Route, Link} from 'react-router-dom';
import SingleBook from "./SingleBook";
import * as BooksAPI from "../BooksAPI";
import ListBooks from "./ListBooks";

class SearchAndAdd extends React.Component {

	static contextTypes = {
	  router: React.PropTypes.func.isRequired
	}

	state = {
		books: [],
		query: ""
	};

	updateQuery(query) {
		BooksAPI.search(query).then(
			books => (books ? this.setState({ books }) : [])
		);
		this.setState({ query });
	}

	updateBookShelf(book, shelf) {
		BooksAPI.update(book, shelf)
			.then(
				() => 
					shelf !== "none"
						? alert(`${book.title} has been added to your shelf!`)
						: null
			)
			.catch(() => alert("Something went wrong! Please try again!"));
	}

	showSearchResults() {
		const { books, query } = this.state;
		if (query) {
			return books.error
				? <div>No results found</div>
				: books.map((book, index) => {
						return (
							<SingleBook
								key={index}
								book={book}
								updateBookShelf={this.updateBookShelf.bind(this)}
							/>
						);
					});
		}
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={e => this.updateQuery(e.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.showSearchResults()}
					</ol>
				</div>
			</div>
		);
	}
}




export default SearchAndAdd;
