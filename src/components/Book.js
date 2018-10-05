import React from 'react';
import {connect} from 'react-redux';
import Controller from './Controller';
import uuid from 'uuid';

export const Book = (book) => (
    <div className="books-grid">
        <div key={uuid()} className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}></div>
                <Controller />  
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
        </div>
    </div>    
)

export default connect()(Book)