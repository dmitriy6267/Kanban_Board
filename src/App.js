import React, { Component } from 'react';

import Header from './components/header';
import Board from './components/board';
import Footer from './components/footer';

class App extends Component {

  state = {
    activeTasks: 0,
    finishedTasks: 0,
    clearBoard: false,
  };

  componentDidMount () {
    this.setState({
      activeTasks: (localStorage.getItem(`backlog`) !== null
        ? JSON.parse(localStorage.getItem(`backlog`))
        : []
      ).length,
      finishedTasks: (localStorage.getItem(`finished`) !== null
        ? JSON.parse(localStorage.getItem(`finished`))
        : []
      ).length,
    });
  }

  clearBoard = () => {
    localStorage.clear();
    this.setState({
      activeTasks: 0,
      finishedTasks: 0,
      clearBoard: !this.state.clearBoard,
    });
    this.countTasks();
  };

  countTasks = (backlog, finished) => {
    if (backlog === 0) {
      this.setState({
        finishedTasks: finished
      });
    } else if (finished === 0){
      this.setState({
        activeTasks: backlog
      });
    };
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Board
          countTasks={this.countTasks}
        />
        <Footer
          activeTasks={this.state.activeTasks}
          finishedTasks={this.state.finishedTasks}
          clearBoard={this.clearBoard}
        />
      </div>
    );
  }
}

export default App;
