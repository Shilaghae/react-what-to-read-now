import React from 'react';
import {connect} from 'react-redux';
import {startSearchBooks} from '../actions/BooksAction'
import { Shelf } from './Shelf';

export class SearchPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startResearch: true
        }
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
        console.log('books into shelf', this.props.books);
        console.log('start', this.props.start);

        return (
            <div className="search-books">
                <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onInput={this.onType}/>
                </div>
                </div>
                    <div className="search-books-results">
                    <Shelf  id={4} title={'Searching'} books={this.state.startResearch ? [] : this.props.books} /> 
                    <div>{this.state.startResearch ? 'No result' : ''}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSearchBooks: (query) => dispatch(startSearchBooks(query))
  });

const mapStateToProps = (state) => {  
    return {
        books: state.books,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);