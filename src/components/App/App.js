import React from 'react';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleMainInputChange = (evt) => {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <ToDoItemsContext.Provider value={this.state}>
        <GlobalStyle />
        <Header />
        <Main onChange={this.handleMainInputChange}/>
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
