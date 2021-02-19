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
      toDoItems: [],
      radioValue: 'All',
      isMaxLength: false,
    };
  }

  componentDidMount() {
    const initData = getDataFromLocalStorage();

    this.setState({
      toDoItems: initData ? JSON.parse(initData) : [],
    });
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
    if (evt.target.value.length > MAX_LENGTH) {
      this.setState({
        isMaxLength: true,
      });
    } else {
      this.setState({
        inputValue: evt.target.value,
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
    const trimmedInputValue = this.state.inputValue.trim();

    if (evt.key === 'Enter' && trimmedInputValue) {
      const id = Date.now();
      const newToDoItem = {
        id,
        text: trimmedInputValue,
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
    if (evt.target.value === 'All') {
      this.setState({
        radioValue: 'All',
      });
    }

    if (evt.target.value === 'Active') {
      this.setState({
        radioValue: 'Active',
      });
    }

    if (evt.target.value === 'Completed') {
      this.setState({
        radioValue: 'Completed',
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
        {Boolean(this.state.toDoItems.length) && (
          <Footer
            onRadioChange={this.handleRadio}
            onClearCompletedBtnClick={this.handleClearCompletedBtn}
          />
        )}
      </ToDoItemsContext.Provider>
    );
  }
}

export default App;
