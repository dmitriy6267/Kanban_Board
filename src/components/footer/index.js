import React, {Component} from 'react';

import './style.css';

import Button from '../button';

class Footer  extends Component {

  render () {
    const { activeTasks, finishedTasks, clearBoard } = this.props;
    return (
      <div className="footer">
        <div>
          <span className="footer__text">Active tasks: {activeTasks}</span>
          <span className="footer__text">Finished tasks: {finishedTasks}</span>
          <Button
              name={'Clear'}
              onClick={clearBoard} />
        </div>
        <span className="footer__autor">Kanban Board by Dmitriy Serebryakov, 2020</span>
      </div>
    )
  }

}

export default Footer;
