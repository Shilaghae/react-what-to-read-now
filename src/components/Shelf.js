import React from 'react';
import Book from './Book';
import {connect} from 'react-redux';
import uuid from 'uuid';

export const Shelf = (props) => {
    return (
        
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {
                props.books.map((book) => (
                    <li key={uuid()}>
                        <Book book={book} shelf_title={props.title} onChange={props.onChange}/> 
                    </li> 
                ))
            }                    
            </ol>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    all_books: state.books
});

export default connect(mapStateToProps)(Shelf)