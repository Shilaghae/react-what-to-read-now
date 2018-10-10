import React from 'react'
import { Header } from './Header';
import SearchPage  from './SearchPage';
import Shelf from './Shelf';
import { connect } from 'react-redux';
import uuid from 'uuid';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        { this.state.showSearchPage ? (
          <SearchPage {...this.props}/>
        ) : (
          <div className="list-books">
            <Header />
            <div className="list-books-content">
              <div>              
              {
                this.props.shelves === 0 ? (
                  <div>No shelves</div>
                ) : (                
                    this.props.shelves.map((shelf) => {
                      return (
                        <Shelf key={uuid()} id={shelf.id} title={shelf.title} books={this.props.books.filter((book) => shelf.books.includes(book.id))} />
                      )
                  })
                )
              }
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shelves: state.shelves,
    books: state.books
  }
}

export default connect(mapStateToProps)(BooksApp)