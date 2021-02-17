import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import ToDoItem from '../ToDoItem';

const StyledToDoList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

function ToDoList(props) {
  const toDoItems = React.useContext(ToDoItemsContext);

  return (
    <section>
      <StyledToDoList>
        {toDoItems.map((item) => (
          (<ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            isCompleted={item.isCompleted}
            onCheckboxChange={props.onCheckboxChange}
            onDelBtnClick={props.onDelBtnClick}
          />)
        ))}
      </StyledToDoList>
    </section>
  );
}

export default ToDoList;
