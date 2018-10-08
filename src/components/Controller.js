import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {startSetShelves} from '../actions/ShelvesAction'
export class Controller  extends React.Component {
    
    onChange = (e) => {        
        const new_shelf_id = e.target.value;

        const new_shelves = this.props.shelves;
        new_shelves[new_shelf_id - 1] = {
            id: this.props.shelves[new_shelf_id - 1].id,
            title: this.props.shelves[new_shelf_id - 1].title,
            books: [...this.props.shelves[new_shelf_id - 1].books, this.props.book.id]
        }
        
        new_shelves[this.props.shelf_id - 1] = {
            id: this.props.shelves[this.props.shelf_id - 1].id,
            title: this.props.shelves[this.props.shelf_id - 1].title,
            books: this.props.shelves[this.props.shelf_id - 1].books.filter((b) => b !== this.props.book.id)
        }

        this.props.startSetShelves(new_shelves);
    }
    render() {
        return (        
            <div className="book-shelf-changer">
                <select onChange={this.onChange}>
                    <option value="move" disabled>Move to...</option>        
                    {
                        this.props.shelves.map((shelf) => (
                            <option key={uuid()} value={shelf.id}>{shelf.title}</option>
                        ))
                    }
                    <option value="none">None</option>
                </select>
            </div>
        );
  };
}

  const mapDispatchToProps = (dispatch) => ({
    startSetShelves: (shelves) => dispatch(startSetShelves(shelves))
  });
  
  const mapStateToProps = (state) => {  
    return {
      shelves: state.shelves,
      books: state.books
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Controller);