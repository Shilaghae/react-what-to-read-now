import React from 'react';
import { connect } from 'react-redux';

export const Header = () => (
  <header className="list-books-title">
    <div>
      <h1>My Reads</h1>
    </div>
  </header>
);

export default connect()(Header);
