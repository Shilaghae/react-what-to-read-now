import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';

export class Controller  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            new_shelf : '',
            book_to_change: props.book
        }
    }
    
    onChange = (e) => {        
        const _new_shelf = e.target.value
        this.props.onChange({
            new_shelf : _new_shelf,
            book : this.state.book_to_change
        })
    }

    render() {
        return (        
            <div className="book-shelf-changer">
                <select onChange={this.onChange} defaultValue={this.props.book.shelf === undefined ? 'none' : this.props.book.shelf}>
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

export default connect()(Controller)