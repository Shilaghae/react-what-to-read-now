import React from 'react';
import {connect} from 'react-redux';
import { Shelf } from './Shelf';
import {addBookToShelf} from '../actions/BooksAction'
import {startQuery} from '../actions/SearchAction'
import Header from './Header';
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
            <div>
            <Header/>
            <div>
                <input className="search" type="text" placeholder="Search Books" onInput={this.onSearch}/>
            </div>
            <div>
                </div>
                    <div className="search-books-results">                    
                    {
                        this.props.books.length === 0 ? 'No result' : (
                            <Shelf onChange={this.onChange} id="searching" title="Search Results" shelf_books={this.props.books} /> 
                        )
                    }
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
      query: state.search.query,
      books: state.search.results
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);