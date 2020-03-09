import React, {Component} from 'react';

import './style.css';

import Column from '../column';
import Details from '../details';


class Board extends Component {

  state = {
    inputValue: "",
    backlog: [],
    ready: [],
    inProgress: [],
    finished: [],
    showDetails: false,
    showDetailsId: '',
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  onAddCard = () => {
    const { inputValue } = this.state;
    const date = new Date();
      if (inputValue === '') {
      } else {
        const data = localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : [];
        data.push(inputValue);
        this.setState({
          inputValue: "",
        });
        localStorage.setItem(`backlog`, JSON.stringify(data));
        localStorage.setItem(inputValue, JSON.stringify(date.toLocaleString()))
      }
  };

  onShowDetails = (e) => {
    let columnName = e.target.innerHTML.toLowerCase();
    if (columnName === 'in progress') {
    columnName = 'inProgress';
    };
    this.setState({
      showDetailsId: columnName,
      showDetails: !this.state.showDetails
    });
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
            showDetails={this.onShowDetails}
            countTasks={this.props.countTasks}
            onChangeInput={this.onChangeInput}
            onAddCard={this.onAddCard}
            onChangeState={this.onChangeState}
            onClickItem={this.onClickItem}
            name="Backlog"
            id={this.props.backlogId} />
          <Column
            showDetails={this.onShowDetails}
            onAddCard={this.onAddCard}
            countTasks={this.props.countTasks}
            onChangeState={this.onChangeState}
            onClickItem={this.onClickItem}
            name="Ready"
            id={this.props.readyId} />
          <Column
            showDetails={this.onShowDetails}
            onAddCard={this.onAddCard}
            countTasks={this.props.countTasks}
            onChangeState={this.onChangeState}
            onClickItem={this.onClickItem}
            name="In Progress"
            id={this.props.inProgressId} />
          <Column
            showDetails={this.onShowDetails}
            onAddCard={this.onAddCard}
            countTasks={this.props.countTasks}
            onChangeState={this.onChangeState}
            onClickItem={this.onClickItem}
            name="Finished"
            id={this.props.finishedId} />
          {this.state.showDetails ? <Details
                                        id={this.state.showDetailsId}
                                        showDetails={this.onShowDetails} /> : null}
        </div>
    )
  }
}

export default Board;
