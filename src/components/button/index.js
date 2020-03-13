import React from 'react';

import './style.css';

const Button = ({ onClick, name, id }) => {
  const classNames = `button ${id}`;
  return (
    <button onClick={onClick} className={classNames}>
      {name}
    </button>
  );
};

export default Button;
