import React from 'react';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import { addDataToLocalStorage, getDataFromLocalStorage } from '../../utils/helpers';
import Footer from '../Footer';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Main from '../Main';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      toDoItems: getDataFromLocalStorage() ? JSON.parse(getDataFromLocalStorage()) : [],
    };
  }

  handleCreateInputChange = (evt) => {
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
      const newToDoItems = [newToDoItem, ...this.state.toDoItems];

      addDataToLocalStorage(newToDoItems);
      this.setState({
        inputValue: '',
        toDoItems: newToDoItems,
      });
    }
  }

  handleCheckbox = (evt, evtToDoId) => {
    const newToDoItems = this.state.toDoItems.map(item => {
      if (evtToDoId === item.id) {
        item.isCompleted = evt.target.checked;
      }

      return item;
    });

    addDataToLocalStorage(newToDoItems);
    this.setState({
      toDoItems: newToDoItems,
    });
  }

  handleDelBtn = (evtToDoId) => {
    const newToDoItems = this.state.toDoItems.filter(item => evtToDoId !== item.id);

    addDataToLocalStorage(newToDoItems);
    this.setState({
      toDoItems: newToDoItems,
    });
  }

  render() {
    return (
      <ToDoItemsContext.Provider value={this.state.toDoItems}>
        <GlobalStyle />
        <Header />
        <Main
          inputValue={this.state.inputValue}
          onChange={this.handleCreateInputChange}
          onKeyDown={this.handleEnter}
          onCheckboxChange={this.handleCheckbox}
          onDelBtnClick={this.handleDelBtn}
        />
        <Footer />
      </ToDoItemsContext.Provider>
    );
  }
}

export default App;
