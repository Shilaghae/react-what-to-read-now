import React from 'react';
import {connect} from 'react-redux';
import { Shelf } from './Shelf';
import {addBookToShelf} from '../actions/BooksAction'
import {startQuery} from '../actions/SearchAction'

export class SearchPage extends React.Component {

    constructor(props) {
        super(props)
    }

    onChange = (change) => {
        this.props.addBookToShelf(change)
    }

    onSearch = (e) => {    
        this.props.startQuery(e.target.value)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onInput={this.onSearch}/>
                </div>
                </div>
                    <div className="search-books-results">
                    <Shelf onChange={this.onChange} id="searching" title="Searching" shelf_books={this.props.books} /> 
                    <div>{this.props.books.length === 0 ? 'No result' : ''}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addBookToShelf: (change) => dispatch(addBookToShelf(change)),
    startQuery: (query) => dispatch(startQuery(query)),
  });

const mapStateToProps = (state) => {
    return {
      books: state.search.results
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);