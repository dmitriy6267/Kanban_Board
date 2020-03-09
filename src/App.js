import React, {Component} from 'react';

import './App.css';

import Header from './components/header';
import Board from './components/board';
import Footer from './components/footer';

class App extends Component {

  state = {
    activeTasks: (localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : []).length,
    finishedTasks: (localStorage.getItem(`finished`) !== null ? JSON.parse(localStorage.getItem(`finished`)) : []).length,
    clearBoard: false
  };

  clearBoard = () => {
    localStorage.clear();
    this.setState({
      clearBoard: !this.state.clearBoard
    })
  }

  countTasks = () => {
    this.setState({
      activeTasks: (localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : []).length,
      finishedTasks: (localStorage.getItem(`finished`) !== null ? JSON.parse(localStorage.getItem(`finished`)) : []).length
    });
  };

  render () {
    return (
      <div className="App">
        <Header />
        <Board
              countTasks={this.countTasks}
              backlogId='backlog'
              readyId='ready'
              inProgressId='inProgress'
              finishedId='finished'/>
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
