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
    this.setState({ inputValue: evt.target.value.trim() });
  }

  handleEnter = (evt) => {
    if (evt.key === 'Enter' && this.state.inputValue) {
      const id = Date.now();
      const newToDoItem = {
        id,
        text: this.state.inputValue,
      }
      const newToDoItems = [newToDoItem].concat(this.state.toDoItems);

      localStorage.setItem('to-do-items', JSON.stringify(newToDoItems));
      this.setState({
        inputValue: '',
        toDoItems: newToDoItems,
      });
    }
  }

  render() {
    return (
      <ToDoItemsContext.Provider value={this.state}>
        <GlobalStyle />
        <Header />
        <Main
          inputValue={this.state.inputValue}
          onChange={this.handleMainInputChange}
          onKeyDown={this.handleEnter} />
      </ToDoItemsContext.Provider>
    );
  }
}

export default App;

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <Title lang="en" className="header__title" isSelected={true}>To Do App</Title>
//       </header>
//     );
//   }
// }

// const StyledHeader = styled.header`
//   .header__title {
//     color: ${({isSelected}) => (isSelected ? 'red': 'blue')};
//   }
// `;
