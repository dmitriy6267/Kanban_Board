import React from 'react';

import './style.css';

const Input = ({ value, onChange, onBlur }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="__________________________________"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      autoFocus={true}
    />
  );
};

export default Input;
