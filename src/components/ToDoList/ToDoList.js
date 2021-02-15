import React from 'react';
import styled from 'styled-components';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoListStyled = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

class ToDoList extends React.Component {
  render() {
    return (
      <section>
        <ToDoListStyled>
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </ToDoListStyled>
      </section>
    );
  }
}

export default ToDoList;
