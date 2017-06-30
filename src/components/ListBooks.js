import React, { Component } from 'react'
import SingleBook from './SingleBook'


class ListBooks extends React.Component {


	render(){

		const books = this.props.books

		return(

          <div className="bookshelf">
            <h2 className="bookshelf-title">All Books</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                
              	{books.map((book) => (

	                	<SingleBook book={book} key={book.id} />
                ))}
              </ol>
            </div>
          </div>


			)


	}

}

export default ListBooks