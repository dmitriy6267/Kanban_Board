import React, {Component} from 'react';

import './App.css';

import Header from './components/header';
import Board from './components/board';
import Footer from './components/footer';

class App extends Component {

  state = {
    backlogData: [],
    readyData: [],
    inProgressData: [],
    finishedData: []
  }

  
  render () {
    return (
      <div className="App">
        <Header />
        <Board  />
        <Footer
              activeTasks={this.state.activeTasks}
              finishedTasks={this.state.finishedTasks}
        />
      </div>
    );
  }
}

export default App;
