import React from 'react';

import './style.css';

const Button = ({ onClick, name }) => {

  return (
    <button
      onClick={onClick}
      className="button">
        {name}
    </button>
  )
}

export default Button;
