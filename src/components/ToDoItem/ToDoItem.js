import React from 'react';
import styled from 'styled-components';
import CheckBox from '../CheckBox/CheckBox';
import DelBtn from '../DelBtn/DelBtn';

const StyledToDoItem = styled.li`
  position: relative;

  :hover .checkbox, :hover .del-btn {
    opacity: 1;
  }
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
      <StyledToDoItem id={this.props.id}>
        <ToDoText>{this.props.text}</ToDoText>
        <CheckBox />
        <DelBtn onDelBtnClick={this.props.onDelBtnClick}/>
      </StyledToDoItem>
    );
  }
}

export default ToDoItem;
