import React, {Component} from 'react';

import './style.css';

import Button from '../button';

class Footer  extends Component {

    state = {
      activeTasks: 0,
      finishedTasks: 0
    }

  componentWillMount() {
      let active = (localStorage.getItem('backlog') !== null ? JSON.parse(localStorage.getItem('backlog')).length : 0) +
                          (localStorage.getItem('ready') !== null ? JSON.parse(localStorage.getItem('ready')).length : 0) +
                          (localStorage.getItem('inProgress') !== null ? JSON.parse(localStorage.getItem('inProgress')).length : 0);
      const finished = localStorage.getItem('finished') !== null ? JSON.parse(localStorage.getItem('finished')).length : 0;
      this.setState({
        activeTasks: active,
        finishedTasks: finished
      }) ;
    }

  render () {


    return (
      <div className="footer">
        <div>
          <span className="footer__text">Active tasks: {this.state.activeTasks}</span>
          <span className="footer__text">Finished tasks: {this.state.finishedTasks}</span>
          <Button onClick={() => {localStorage.clear()}} />
        </div>
        <span className="footer__autor">Kanban Board by Dmitriy Serebryakov, 2020</span>
      </div>
    )
  }

}

export default Footer;
