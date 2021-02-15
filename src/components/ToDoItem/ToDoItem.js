import React from 'react';
import styled from 'styled-components';
import DelBtn from '../DelBtn/DelBtn';

const ToDoItemStyled = styled.li`
  position: relative;
`

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
      <ToDoItemStyled id={this.props.id}>
        <ToDoText>{this.props.text}</ToDoText>
        <DelBtn onDelBtnClick={this.props.onDelBtnClick}/>
      </ToDoItemStyled>
    );
  }
}

export default ToDoItem;
