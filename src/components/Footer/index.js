import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import Radio from '../Radio';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Wrapper = styled.div`
  display: flex;
  flex-basis: 230px;
  justify-content: space-between;
`


function Footer(props) {
  const toDoItems = React.useContext(ToDoItemsContext).toDoItems;
  const notCompletedItems = toDoItems.filter(item => !item.isCompleted);

  return (
    <StyledFooter>
      <Text>{`${notCompletedItems.length} items left`}</Text>
      <Wrapper>
        <Radio
          text="All"
          onRadioChange={props.onRadioChange}
        />
        <Radio
          text="Active"
          onRadioChange={props.onRadioChange}
        />
        <Radio
          text="Completed"
          onRadioChange={props.onRadioChange}
        />
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
