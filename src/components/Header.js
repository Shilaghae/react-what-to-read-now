
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = (props) => (
    <div className="navbar"> 
        <Link to="/" >
            Home
        </Link>
        <Link to="/search">
            Search
        </Link>
    </div>
)

export default connect()(Header)

