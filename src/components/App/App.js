import React from 'react';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />        
        <Header />
        <Main />
      </>
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
