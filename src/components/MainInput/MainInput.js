import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;      
`;

const Input = styled.input`      
  flex-basis: 550px;
  height: 65px;  
  box-sizing: border-box;
  font-size: 24px;
  padding: 0 10px;
  border: none;      
`;

class MainInput extends React.Component {
  render() {
    return (
      <Section>
        <Input type="text" maxLength="10" placeholder="What needs to be done?" />
      </Section>
    );
  }  
}

export default MainInput;
