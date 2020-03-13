import React, { Component } from 'react';

import './style.css';

class Dropdown extends Component {
  
  onGetData = () => {
    const { id } = this.props;
    let data = [];
    switch (id) {
      case 'ready':
        data = localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : [];
        break;
      case 'inProgress':
        data = localStorage.getItem(`ready`) !== null ? JSON.parse(localStorage.getItem(`ready`)) : [];
        break;
      case 'finished':
        data = localStorage.getItem(`inProgress`) !== null ? JSON.parse(localStorage.getItem(`inProgress`)) : [];
        break;
      default:
        data = 'Ooops! Something goes wrong...';
    }
    return data;
  };

  render() {
    return (
      <ul className="dropdown">
        {this.onGetData().map(item => {
          return (
            <li
              className="dropdown__item"
              onClick={this.props.clickItem}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Dropdown;
