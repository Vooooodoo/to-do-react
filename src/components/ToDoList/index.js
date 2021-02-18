import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import CreateInput from '../CreateInput';
import ToDoItem from '../ToDoItem';

const StyledToDoList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

function ToDoList(props) {
  const toDoItems = React.useContext(ToDoItemsContext).toDoItems;

  return (
    <section>
      <StyledToDoList>
        {toDoItems.map((item) => (
          item.isEditable
            ? (<CreateInput
                 key={item.id}
                 id={item.id}
                 inputValue={item.text}
                 autofocus={true}
                 onChange={evt => props.onEditInputChange(evt, item.id)}
                 onBlur={props.onBlur}
               />)
            : (<ToDoItem
                 key={item.id}
                 id={item.id}
                 text={item.text}
                 isCompleted={item.isCompleted}
                 onCheckboxChange={props.onCheckboxChange}
                 onDelBtnClick={props.onDelBtnClick}
                 onToDoItemDblClick={props.onToDoItemDblClick}
               />)
        ))}
      </StyledToDoList>
    </section>
  );
}

export default ToDoList;
