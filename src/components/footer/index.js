import React, {Component} from 'react';

import './style.css';

import Button from '../button';

class Footer  extends Component {

  render () {


    return (
      <div className="footer">
        <div>
          <span className="footer__text">Active tasks: {this.props.activeTasks}</span>
          <span className="footer__text">Finished tasks: {this.props.finishedTasks}</span>
          <Button onClick={() => {localStorage.clear()}} />
        </div>
        <span className="footer__autor">Kanban Board by Dmitriy Serebryakov, 2020</span>
      </div>
    )
  }

}

export default Footer;
