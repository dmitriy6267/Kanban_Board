import React, {Component} from 'react';

import './style.css';

import Button from '../button';
import Input from '../input';
import Dropdown from '../dropdown';
import ListItem from '../listItem';

class Column extends Component {

  state = {
    isBtnActive: false,
    inputValue: "",
    backlogCards: [],
    readyCards: [],
    inProgressCards: [],
    finishedCards: []
  }

  onChangeBtnState = () => {
    this.setState({
      isBtnActive: !this.state.isBtnActive
    });
  }

onChangeInput = (event) => {
  this.setState({
    inputValue: event.target.value
  });
}

checkId = () => {
  if (this.props.id === "backlog") {
      return (
        this.state.isBtnActive ? <Input
                          value={this.state.inputValue}
                          onChange={this.onChangeInput}
                          onBlur={this.onAddCard}
                          autoFocus={true}/> : null
      )} else {
        return (
          this.state.isBtnActive ? <Dropdown
                          clickItem={this.onClickItem}
                          id={this.props.id} /> : null
        )
      }
  }

onAddCard = () => {
  const { inputValue } = this.state;
    if (this.state.inputValue === '') {
      this.setState({
        isBtnActive: !this.state.isBtnActive
      })
    } else {
      const data = localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : [];
      data.push(inputValue);
      this.setState({
        inputValue: '',
        isBtnActive: !this.state.isBtnActive
      });
      localStorage.setItem(`backlog`, JSON.stringify(data));
    }
}

onClickItem = (e) => {
  const {id} = this.props;
  const item = e.target.innerHTML;
  const data = localStorage.getItem(`${id}`) !== null ? JSON.parse(localStorage.getItem(`${id}`)) : [];
  data.push(item);
  localStorage.setItem(`${id}`, JSON.stringify(data));
  let newData = [];
  let previousColumn = '';

  if (id === 'ready') { previousColumn = 'backlog' }
  else if ( id === 'inProgress') { previousColumn = 'ready' }
  else if (id === 'finished'){ previousColumn = 'inProgress' };

  const previousCards = localStorage.getItem(previousColumn) !== null ? JSON.parse(localStorage.getItem(previousColumn)) : [];
  for (let i=0; i<previousCards.length; i++) {
    if (previousCards[i] !== item) {
      newData.push(previousCards[i]);
    }
  };
  this.setState({
    isBtnActive: !this.state.isBtnActive
  });
  localStorage.setItem(previousColumn, JSON.stringify(newData));
}

render () {

  const { isBtnActive } = this.state;
  const { id, name } = this.props;
  const storageData = localStorage.getItem(`${id}`) !== null ? JSON.parse(localStorage.getItem(`${id}`)) : [];

  return (
    <div className="column">
      <h1 className="column__name">{name}</h1>
      <div>
        <ul className="column__items">
        {storageData.map((item) => {
          return (
            <ListItem
                  key={item}
                  listName={item} />)
        })}
        </ul>
        { this.checkId() }
        <Button
            onClick={isBtnActive ? this.onAddCard : this.onChangeBtnState}
        >+ Add card</Button>
      </div>
    </div>
   )
  }
}

export default Column;

// switch (id) {
//   case 'ready':
//     const backlogCards = localStorage.getItem(`backlog`) !== null ? JSON.parse(localStorage.getItem(`backlog`)) : [];
//     for (let i=0; i<backlogCards.length; i++) {
//       if (backlogCards[i] !== item) {
//         newData.splice([i], 1);
//       }
//     };
//     this.setState({
//       backlogData: newData
//     })
//     localStorage.setItem(`backlog`, JSON.stringify(newData));
//     break;
//   case 'inProgress':
//     const inProgressCards = localStorage.getItem(`ready`) !== null ? JSON.parse(localStorage.getItem(`ready`)) : [];
//     for (let i=0; i<inProgressCards.length; i++) {
//       if (inProgressCards[i] !== item) {
//         newData.push(inProgressCards[i])
//       }
//     };
//     this.setState({
//       ready: newData
//     })
//     localStorage.setItem(`ready`, JSON.stringify(newData));
//     break;
//   case 'finished':
//     const finishedCards = localStorage.getItem(`inProgress`) !== null ? JSON.parse(localStorage.getItem(`inProgress`)) : [];
//     for (let i=0; i<finishedCards.length; i++) {
//       if (finishedCards[i] !== item) {
//         newData.push(finishedCards[i])
//       }
//     };
//     this.setState({
//       inProgress: newData
//     })
//     localStorage.setItem(`inProgress`, JSON.stringify(newData));
//     break;
//   default:
// }
