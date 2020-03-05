import React, {Component} from 'react';

import './style.css';

import Column from '../column';


class Board extends Component {

  state = {
    inputValue: "",
    backlog: [],
    ready: [],
    inProgress: [],
    finished: []
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  onAddCard = () => {
    const { inputValue } = this.state;
      if (inputValue === '') {
      } else {
        const data = localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : [];
        data.push(inputValue);
        this.setState({
          inputValue: "",
        });
        localStorage.setItem(`backlog`, JSON.stringify(data));
      }
  };

  onChangeState = () => {
      let {backlog, ready, inProgress, finished} = this.state;
    this.setState ({
      backlog: [backlog],
      ready: [ready],
      inProgress: [inProgress],
      finished: [finished]
    });
  };

  render () {
    return (
      <div className="board">
        <Column
          countTasks={this.props.countTasks}
          onChangeInput={this.onChangeInput}
          onAddCard={this.onAddCard}
          onChangeState={this.onChangeState}
          onClickItem={this.onClickItem}
          name="Backlog"
          id="backlog" />
        <Column
          onAddCard={this.onAddCard}
          countTasks={this.props.countTasks}
          onChangeState={this.onChangeState}
          onClickItem={this.onClickItem}
          name="Ready"
          id="ready" />
        <Column
          onAddCard={this.onAddCard}
          countTasks={this.props.countTasks}
          onChangeState={this.onChangeState}
          onClickItem={this.onClickItem}
          name="In Progress"
          id="inProgress" />
        <Column
          onAddCard={this.onAddCard}
          countTasks={this.props.countTasks}
          onChangeState={this.onChangeState}
          onClickItem={this.onClickItem}
          name="Finished"
          id="finished" />
      </div>
    )
  }
}

export default Board;
