import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import shelfValue from '../selectors/BookSelector'
export class Controller  extends React.Component {
    constructor(props) {
        super(props)
    }
    
    onChange = (e) => {        
        const _new_shelf = e.target.value
        this.props.onChange({
            new_shelf : _new_shelf,
            book : this.props.book
        })
    }

    render() {
        console.log('state', this.props.all_books)
        return (        
            <div className="book-shelf-changer">
                <select onChange={this.onChange} defaultValue={this.props.shelf_book_value}>
                    <option value="move" disabled>Move to...</option>                                
                    <option key={uuid()} value="currentlyReading">Currently Reading</option>
                    <option key={uuid()} value="wantRead">Want to Read</option>
                    <option key={uuid()} value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
  };
}

const mapStateToProps = (state, props) => ({
    all_books: state.books,
    shelf_book_value: shelfValue(state.books, props.book)
});

export default connect(mapStateToProps)(Controller)