import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';

const StyledFooter = styled.footer`
  background-color: white;
  min-height: 32px;
  padding: 15px;
  box-sizing: border-box;
`

const Text = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
`

function Footer() {
  const toDoItems = React.useContext(ToDoItemsContext).toDoItems;
  const itemsLeft = toDoItems.filter(item => !item.isCompleted);

  return (
    <StyledFooter>
      <Text>{`${itemsLeft.length} items left`}</Text>
    </StyledFooter>
  );
}

export default Footer;
