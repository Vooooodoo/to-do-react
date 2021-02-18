import React from 'react';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import MAX_LENGTH from '../../utils/constants';
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
      isMaxLength: false,
    };
  }

  createNewToDoItemsArr = (key, value, elementId) => {
    const newToDoItems = this.state.toDoItems.map(item => {
      if (elementId === item.id) {
        item[key] = value;
      }

      return item;
    });

    return newToDoItems;
  }

  saveData = (data) => {
    addDataToLocalStorage(data);
    this.setState({
      toDoItems: data,
    });
  }

  handleCreateInputChange = (evt) => {
    this.setState({ inputValue: evt.target.value });

    if (evt.target.value.length > MAX_LENGTH) {
      this.setState({
        inputValue: evt.target.value.slice(0, MAX_LENGTH),
        isMaxLength: true,
      });
    } else {
      this.setState({
        isMaxLength: false,
      });
    }
  }

  handleEditInputChange = (evt, evtTargetId) => {
    const newToDoItems = this.createNewToDoItemsArr('text', evt.target.value, evtTargetId);

    this.setState({
      toDoItems: newToDoItems,
    });

    if (evt.target.value.length > MAX_LENGTH) {
      const newToDoItems = this.state.toDoItems.map(item => {
        if (evtTargetId === item.id) {
          item.text = evt.target.value.slice(0, MAX_LENGTH);
          item.isMaxLength = true;
        }

        return item;
      });

      this.setState({
        toDoItems: newToDoItems,
      });
    } else {
      const newToDoItems = this.createNewToDoItemsArr('isMaxLength', false, evtTargetId);

      this.setState({
        toDoItems: newToDoItems,
      });
    }
  }

  handleEnter = (evt) => {
    if (evt.key === 'Enter' && this.state.inputValue.trim()) {
      const id = Date.now();
      const newToDoItem = {
        id,
        text: this.state.inputValue.trim(),
        isCompleted: false,
        isEditable: false,
        isMaxLength: false,
      }
      const newToDoItems = [newToDoItem, ...this.state.toDoItems];

      addDataToLocalStorage(newToDoItems);
      this.setState({
        inputValue: '',
        toDoItems: newToDoItems,
        isMaxLength: false,
      });
    }
  }

  handleCheckbox = (evt, evtTargetId) => {
    const newToDoItems = this.createNewToDoItemsArr('isCompleted', evt.target.checked, evtTargetId);

    this.saveData(newToDoItems);
  }

  deleteToDoItem = (evtTargetId) => {
    const newToDoItems = this.state.toDoItems.filter(item => evtTargetId !== item.id);

    this.saveData(newToDoItems);
  }

  handleRadio = (evt) => {
    this.state = {
      toDoItems: JSON.parse(getDataFromLocalStorage()),
    };

    if (evt.target.value === 'All') {
      this.setState({
        toDoItems: JSON.parse(getDataFromLocalStorage()),
      });
    }

    if (evt.target.value === 'Active') {
      const activeItems = this.state.toDoItems.filter(item => !item.isCompleted);

      this.setState({
        toDoItems: activeItems,
      });
    }

    if (evt.target.value === 'Completed') {
      const completedItems = this.state.toDoItems.filter(item => item.isCompleted);

      this.setState({
        toDoItems: completedItems,
      });
    }
  }

  handleClearCompletedBtn = () => {
    const newToDoItems = this.state.toDoItems.filter(item => !item.isCompleted);

    this.saveData(newToDoItems);
  }

  handleEdetingDblClick = (evtTargetId) => {
    const newToDoItems = this.createNewToDoItemsArr('isEditable', true, evtTargetId);

    this.saveData(newToDoItems);
  }

  handleInputBlur = (evt, evtTargetId) => {
    if (evt.target.value.trim()) {
      const newToDoItems = this.state.toDoItems.map(item => {
        if (evtTargetId === item.id) {
          item.text = evt.target.value;
          item.isEditable = false;
        }

        return item;
      });

      this.saveData(newToDoItems);
    } else {
      this.deleteToDoItem(evtTargetId);
    }
  }

  render() {
    return (
      <ToDoItemsContext.Provider value={this.state}>
        <GlobalStyle />
        <Header />
        <Main
          inputValue={this.state.inputValue}
          onCreateInputChange={this.handleCreateInputChange}
          onEditInputChange={this.handleEditInputChange}
          onKeyDown={this.handleEnter}
          onCheckboxChange={this.handleCheckbox}
          onDelBtnClick={this.deleteToDoItem}
          onToDoItemDblClick={this.handleEdetingDblClick}
          onBlur={this.handleInputBlur}
          isMaxLength={this.state.isMaxLength}
        />
        {this.state.toDoItems.length > 0
          && <Footer
              onRadioChange={this.handleRadio}
              onClearCompletedBtnClick={this.handleClearCompletedBtn}
             />
        }
      </ToDoItemsContext.Provider>
    );
  }
}

export default App;
