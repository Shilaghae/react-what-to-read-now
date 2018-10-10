import React from 'react';
import {connect} from 'react-redux';
import Controller from './Controller';
import uuid from 'uuid';

export const Book = (props) => {
    return (
        <div className="books-grid">
            <div key={uuid()} className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
                    <Controller book={props.book} onChange={props.onChange}/>  
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
            </div>
        </div>    
    )
}

export default connect()(Book)