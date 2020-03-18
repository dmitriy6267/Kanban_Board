import React, { Component } from 'react';

import './style.css';

import Button from '../button';
import Input from '../input';
import Dropdown from '../dropdown';
import ListItem from '../listItem';

class Column extends Component {

  state = {
    isBtnActive: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.clickOutside)
  };

  clickOutside = (e) => {
    const target = e.target.className;
    if (typeof(target) !== "object") {
      if ( target.indexOf(this.props.id) === -1 ) {
        this.setState ({
          isBtnActive: false
        });
      };
    };
  };

  onChangeBtnState = () => {
    this.setState({
      isBtnActive: !this.state.isBtnActive,
    });
  };

  onAddCard = () => {
    this.props.onAddCard();
    this.onChangeBtnState();
  };

  checkId = () => {
    if (this.props.id === 'backlog') {
      return this.state.isBtnActive ? (
        <Input
          value={this.props.inputValue}
          onChange={this.props.onChangeInput}
          onBlur={this.onAddCard}
          autoFocus={true}
        />
      ) : null;
    } else {
      return this.state.isBtnActive ? (
        <Dropdown clickItem={this.onClickItem} id={this.props.id} />
      ) : null;
    }
  };

  onClickItem = (e) => {
    const { id } = this.props;
    const item = e.target.innerHTML;
    const data =
      localStorage.getItem(`${id}`) !== null
        ? JSON.parse(localStorage.getItem(`${id}`))
        : [];
    data.push(item);
    localStorage.setItem(`${id}`, JSON.stringify(data));
    let newData = [];
    let previousColumn;

    switch (id) {
      case 'ready':
        previousColumn = 'backlog';
        break;
      case 'inProgress':
        previousColumn = 'ready';
        break;
      case 'finished':
        previousColumn = 'inProgress';
        break;
      default:
        previousColumn = '';
    }
    const previousCards =
      localStorage.getItem(previousColumn) !== null
        ? JSON.parse(localStorage.getItem(previousColumn))
        : [];
    for (let i = 0; i < previousCards.length; i++) {
      if (previousCards[i] !== item) {
        newData.push(previousCards[i]);
      }
    };
    this.props.onChangeState();
    this.onChangeBtnState();
    if (id === 'finished') {
      this.props.countTasks(0, data.length);
    } else if (previousColumn === "backlog") {
      this.props.countTasks(-1, data.length);
    };
    localStorage.setItem(previousColumn, JSON.stringify(newData));
  };

  render() {
    const { id, name, showDetails } = this.props;
    const storageData =
      localStorage.getItem(`${id}`) !== null
        ? JSON.parse(localStorage.getItem(`${id}`))
        : [];

    return (
      <div className="column">
        <h1 className="column__name" onClick={showDetails}>
          {name}
        </h1>
        <div>
          <ul className="column__items">
            {storageData.map(item => {
              return <ListItem key={item} listName={item} />;
            })}
          </ul>
          {this.checkId()}
          <Button
            name={'+ Add card'}
            id={id}
            onClick={
              this.state.isBtnActive ? this.onAddCard : this.onChangeBtnState
            }
          >
            + Add card
          </Button>
        </div>
      </div>
    );
  }
}

export default Column;
