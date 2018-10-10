import React from 'react';
import Book from './Book';
import {connect} from 'react-redux';
import uuid from 'uuid';

export const Shelf = ({id, title, books}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {
                books.map((book) => (
                    <li key={uuid()}>
                        <Book book={book}/> 
                    </li> 
                ))
            }                    
            </ol>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        all_books: state.books
    };
}  

export default connect(mapStateToProps)(Shelf)