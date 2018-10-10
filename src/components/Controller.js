import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {startMoveBook} from '../actions/ShelvesAction'
import {startChangeBookSet} from '../actions/BooksAction'
export class Controller  extends React.Component {
    
    onChange = (e) => {        
        const new_shelf_id = e.target.value
        const old_shelf_id = this.props.book.shelf_id;
        this.props.startMoveBook(old_shelf_id, new_shelf_id, this.props.book.id).then(() => {
            this.props.startChangeBookSet(this.props.book, new_shelf_id);
        })
    }

    render() {
        return (        
            <div className="book-shelf-changer">
                <select onChange={this.onChange} defaultValue={this.props.book.shelf_id}>
                    <option value="move" disabled>Move to...</option>        
                    {
                        this.props.shelves.map((shelf) => {
                            return (
                                <option key={uuid()} value={shelf.id}>{shelf.id}</option>
                            )
                        })
                    }
                    <option value="4">None</option>
                </select>
            </div>
        );
  };
}

  const mapDispatchToProps = (dispatch) => ({
    startMoveBook: (shelf_id, new_shelf_id, book_id) => dispatch(startMoveBook(shelf_id, new_shelf_id, book_id)),
    startChangeBookSet: (book, new_shelf_id) => dispatch(startChangeBookSet(book, new_shelf_id))
  });

  const mapStateToProps = (state) => {  
    return {
      shelves: state.shelves,
      books: state.books
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Controller);