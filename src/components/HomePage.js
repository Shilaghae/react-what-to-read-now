import React from 'react';
import { connect } from 'react-redux';
import Shelf from './Shelf';
import uuid from 'uuid';
import {moveBooksBetweenShelves} from '../actions/BooksAction'

export class HomePage extends React.Component {
    onChange = (change) => {    
        this.props.moveBooksBetweenShelves(change)
    }

    render() {
       return ( 
            <div className="list-books">
                <div className="list-books-content">
                <div>              
                {     
                    <div>         
                        <Shelf onChange={this.onChange} key={uuid()} id="currentlyReading" title={"Currently Reading"} shelf_books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} />
                        <Shelf onChange={this.onChange} key={uuid()} id="wantRead" title={"Want to Read"} shelf_books={this.props.books.filter((book) => book.shelf === 'wantRead')} />
                        <Shelf onChange={this.onChange} key={uuid()} id="read" title={"Read"} shelf_books={this.props.books.filter((book) => book.shelf === 'read')} />
                    </div>
                }
                </div>
                </div>
                <div className="open-search">
                </div>
            </div>
        )
    }
} 
const mapDispatchToProps = (dispatch) => ({
    moveBooksBetweenShelves: (change) => dispatch(moveBooksBetweenShelves(change)),
  });

const mapStateToProps = (state) => {
    return {
      books: state.books
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)