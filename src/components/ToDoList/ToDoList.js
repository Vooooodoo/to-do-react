import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import ToDoItem from '../ToDoItem/ToDoItem';

const StyledToDoList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

class ToDoList extends React.Component {
  static contextType = ToDoItemsContext;

  render() {
    return (
      <section>
        <StyledToDoList>
          {this.context.toDoItems.map((item) => (
            (<ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              onCheckboxClick={this.props.onCheckboxClick}
              onDelBtnClick={this.props.onDelBtnClick}
            />)
          ))}
        </StyledToDoList>
      </section>
    );
  }
}

export default ToDoList;
