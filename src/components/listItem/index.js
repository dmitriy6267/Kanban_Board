import React from 'react';

import './style.css';

const ListItem = ({listName}) => {
  return (
    <li className="card__action">{listName}</li>
  )
}

export default ListItem;
