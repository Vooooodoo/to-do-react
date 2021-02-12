import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;  
  text-align: center;
  margin: 0 0 20px;      
`;

class Header extends React.Component {
  render() {
    return (
      <header>
        <Title lang="en">To Do App</Title>
      </header>
    );
  }  
}

export default Header;
