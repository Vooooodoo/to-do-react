import React from 'react';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      toDoItems: localStorage.getItem('to-do-items') ? JSON.parse(localStorage.getItem('to-do-items')) : [],
    };
  }

  handleMainInputChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }

  handleEnter = (evt) => {
    if (evt.key === 'Enter' && this.state.inputValue.trim()) {
      const id = Date.now();
      const newToDoItem = {
        id,
        text: this.state.inputValue.trim(),
        isCompleted: false,
      }
      const newToDoItems = [newToDoItem].concat(this.state.toDoItems);

      localStorage.setItem('to-do-items', JSON.stringify(newToDoItems));
      this.setState({
        inputValue: '',
        toDoItems: newToDoItems,
      });
    }
  }

  handleCheckbox = (evt) => {
    const toDoItem = evt.target.parentNode;
    const newToDoItems = this.state.toDoItems.map(item => {
      if (Number(toDoItem.id) === item.id) {
        item.isCompleted = evt.target.checked;
      }

      return item;
    });

    localStorage.setItem('to-do-items', JSON.stringify(newToDoItems));
    this.setState({
      toDoItems: newToDoItems,
    });
  }

  handleDelBtn = (evt) => {
    const toDoItem = evt.target.parentNode;
    const newToDoItems = this.state.toDoItems.filter(item => Number(toDoItem.id) !== item.id);

    localStorage.setItem('to-do-items', JSON.stringify(newToDoItems));
    this.setState({
      toDoItems: newToDoItems,
    });
  }

  render() {
    return (
      <ToDoItemsContext.Provider value={this.state}>
        <GlobalStyle />
        <Header />
        <Main
          inputValue={this.state.inputValue}
          onChange={this.handleMainInputChange}
          onKeyDown={this.handleEnter}
          onCheckboxClick={this.handleCheckbox}
          onDelBtnClick={this.handleDelBtn}
        />
      </ToDoItemsContext.Provider>
    );
  }
}

export default App;
