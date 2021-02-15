import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoListStyled = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

class ToDoList extends React.Component {
  static contextType = ToDoItemsContext;

  render() {
    return (
      <section>
        <ToDoListStyled>
          {this.context.toDoItems.map((item) => (
            (<ToDoItem
              key={item.id}
              text={item.text}
            />)
          ))}
        </ToDoListStyled>
      </section>
    );
  }
}

export default ToDoList;
