import React from 'react';
import {connect} from 'react-redux';

export const Controller = (props) => {
    return (        
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>        
                {
                    props.shelves.map((shelf) => (
                        <option key={shelf.id} value={shelf.title.replace(/\s/g, '').toLowerCase()}>{shelf.title}</option>
                    ))
                }
                <option value="none">None</option>
            </select>
        </div>
    );
  };
  
  const mapStateToProps = (state) => {  
    return {
      shelves: state.shelves
    };
  };
  
  export default connect(mapStateToProps)(Controller);