import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleBook from "./SingleBook";
import escapeRegExp from "escape-string-regexp";
import * as BooksAPI from "../BooksAPI";

class ListBooks extends React.Component {
	static propTypes: {
		books: PropTypes.array.isRequired
	};

	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	};

	componentDidMount() {
		this.fetchBooks();
	}

	fetchBooks() {
		BooksAPI.getAll().then(books => {
			const cr = new RegExp("currentlyReading");
			let currentlyReading = books
				? books.filter(book => cr.test(book.shelf))
				: null;

			const wr = new RegExp("wantToRead");
			let wantToRead = books ? books.filter(book => wr.test(book.shelf)) : null;

			const r = new RegExp("read");
			let read = books ? books.filter(book => r.test(book.shelf)) : null;

			this.setState({ currentlyReading, wantToRead, read });
		});
	}

	updateBookShelf(book, shelf) {
		BooksAPI.update(book, shelf).then(() => this.fetchBooks());
	}

	buildShelf(books, title) {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">
					{title}
				</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book, index) =>
							<SingleBook
								key={index}
								book={book}
								updateBookShelf={this.updateBookShelf.bind(this)}
							/>
						)}
					</ol>
				</div>
			</div>
		);
	}

	render() {
		const { currentlyReading, wantToRead, read } = this.state;

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{this.buildShelf(currentlyReading, "Currently Reading")}
						{this.buildShelf(wantToRead, "Want to Read")}
						{this.buildShelf(read, "Read")}
					</div>
				</div>
			</div>
		);
	}
}

export default ListBooks;
