import React, {Component} from 'react';

import './style.css';

import Column from '../column';


class Board extends Component {

  render () {
    return (
      <div className="board">
        <Column
          name="Backlog"
          id="backlog" />
        <Column
          name="Ready"
          id="ready" />
        <Column
          name="In Progress"
          id="inProgress" />
        <Column
          name="Finished"
          id="finished" />
      </div>
    )
  }
}

export default Board;
