import React from 'react';
import Book from './Book';
import {connect} from 'react-redux';

export const Shelf = ({id, title, books, all_books}) => {
    console.log('books into shelf', books);
    console.log('books into shelf', all_books);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {
                books.map((bid) => (
                    all_books.map((book) => {
                        if(book.id === bid) {
                            return (
                                <li>
                                    <Book book={book} shelf_id={id}/> 
                                </li> 
                            )
                        }
                    }) 
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