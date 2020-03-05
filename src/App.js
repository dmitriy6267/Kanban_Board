import React, {Component} from 'react';

import './App.css';

import Header from './components/header';
import Board from './components/board';
import Footer from './components/footer';

class App extends Component {

  state = {
    activeTasks: (localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : []).length,
    finishedTasks: (localStorage.getItem(`finished`) !== null ? JSON.parse(localStorage.getItem(`finished`)) : []).length
  };

  countTasks = () => {
    this.setState({
      activeTasks: (localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : []).length,
      finishedTasks: (localStorage.getItem(`finished`) !== null ? JSON.parse(localStorage.getItem(`finished`)) : []).length
    });
    console.log(`countTasks`);
  };

  render () {
    return (
      <div className="App">
        <Header />
        <Board
              countTasks={this.countTasks}/>
        <Footer
              activeTasks={this.state.activeTasks}
              finishedTasks={this.state.finishedTasks}
        />
      </div>
    );
  }
}

export default App;
