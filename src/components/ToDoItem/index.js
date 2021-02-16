import React from 'react';
import styled from 'styled-components';
import Checkbox from '../Checkbox';
import DeleteButton from '../DeleteButton';

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
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
`;

class ToDoItem extends React.Component {
  render() {
    return (
      <StyledToDoItem>
        <ToDoText isCompleted={this.props.isCompleted}>{this.props.text}</ToDoText>
        <Checkbox
          toDoItemId={this.props.id}
          isChecked={this.props.isCompleted}
          onCheckboxChange={this.props.onCheckboxChange}
        />
        <DeleteButton
          toDoItemId={this.props.id}
          onDelBtnClick={this.props.onDelBtnClick}
        />
      </StyledToDoItem>
    );
  }
}

export default ToDoItem;
