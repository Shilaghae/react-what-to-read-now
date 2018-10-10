import React from 'react';
import {connect} from 'react-redux';
import {startSearchBooks} from '../actions/BooksAction'
import { Shelf } from './Shelf';
import {addBookToShelf} from '../actions/BooksAction'

export class SearchPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startResearch: true
        }
    }

    onChange = (change) => {
        this.props.addBookToShelf(change)
    }

    onType = (e) => {        
        const type = e.target.value
        this.props.startSearchBooks(type).then((result) => {
            if(result.books.length > 0) {
                this.setState({
                    startResearch: false
                })
            } else {
                this.setState({
                    startResearch: true
                })
            }
        }).catch((error) => {
            this.setState({
                startResearch: true
            })
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onInput={this.onType}/>
                </div>
                </div>
                    <div className="search-books-results">
                    <Shelf onChange={this.onChange} id="searching" title="Searching" shelf_books={this.state.startResearch ? [] : this.props.books} /> 
                    <div>{this.state.startResearch ? 'No result' : ''}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addBookToShelf: (change) => dispatch(addBookToShelf(change)),
    startSearchBooks: (type) => dispatch(startSearchBooks(type))
  });

const mapStateToProps = (state) => {
    return {
      books: state.books
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);