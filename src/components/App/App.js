import React from 'react';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Header from '../Header/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />        
        <Header />
      </>
    );
  }  
}

export default App;
