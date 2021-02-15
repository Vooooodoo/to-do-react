import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  font-size: 24px;
  padding: 0 15px;
  border: none;
  margin-bottom: 10px;
`;

class MainInput extends React.Component {
  render() {
    return (
      <section>
        <Input type="text" maxLength="10" placeholder="What needs to be done?" />
      </section>
    );
  }
}

export default MainInput;
