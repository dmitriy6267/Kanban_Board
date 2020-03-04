import React from 'react';

import './style.css';

const Button = ({onClick}) => {

  return (
    <button
      onClick={onClick}
      className="button">
        + Add card
    </button>
  )
}

export default Button;
