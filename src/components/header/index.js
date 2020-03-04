import React from 'react';

import './style.css';

import User from '../user';

const Header = () => {

  return (
    <div className="header">
      <span className="header__text">Awesome Kanban Board</span>
      <User />
    </div>
  )
}

export default Header;
