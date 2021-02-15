import React from 'react';
import styled from 'styled-components';

const ToDoText = styled.p`
  background-color: white;
  margin: 0 0 1px;
  min-height: 65px;
  color: black;
  font-size: 24px;
  padding: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

class ToDoItem extends React.Component {
  render() {
    return (
      <li>
        <ToDoText>Hello!</ToDoText>
      </li>
    );
  }
}

export default ToDoItem;
