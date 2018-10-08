import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {moveBook} from '../actions/ShelvesAction'
export class Controller  extends React.Component {
    
    onChange = (e) => {        
        const new_shelf_id = e.target.value
        this.props.moveBook(this.props.shelf_id, new_shelf_id, this.props.book.id);
    }

    render() {
        return (        
            <div className="book-shelf-changer">
                <select onChange={this.onChange} defaultValue={this.props.shelf_id}>
                    <option value="move" disabled>Move to...</option>        
                    {
                        this.props.shelves.map((shelf) => {
                            return (
                                <option key={uuid()} value={shelf.id}>{shelf.title}</option>
                            )
                        })
                    }
                </select>
            </div>
        );
  };
}

  const mapDispatchToProps = (dispatch) => ({
    moveBook: (shelf_id, new_shelf_id, book_id) => dispatch(moveBook(shelf_id, new_shelf_id, book_id))
  });
  
  const mapStateToProps = (state) => {  
    return {
      shelves: state.shelves,
      books: state.books
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Controller);