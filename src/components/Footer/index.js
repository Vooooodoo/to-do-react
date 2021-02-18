import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';
import Radio from '../Radio';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  min-height: 65px;
  padding: 15px;
  box-sizing: border-box;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`

const Text = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;

  @media all and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

const Container = styled.div`
  display: flex;
  flex-basis: 230px;
  justify-content: space-between;

  @media all and (max-width: 767px) {
    flex-basis: auto;
    width: 230px;
    margin-bottom: 12px;
  }
`

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
`

function Footer(props) {
  const toDoItems = React.useContext(ToDoItemsContext).toDoItems;
  const notCompletedItems = toDoItems.filter(item => !item.isCompleted);
  const completedItems = toDoItems.filter(item => item.isCompleted);

  return (
    <StyledFooter>
      <Text>{`${notCompletedItems.length} items left`}</Text>

      <Container>
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
      </Container>

      {completedItems.length > 0
        && (<Button
              className="transition"
              type="button"
              onClick={props.onClearCompletedBtnClick}
            >
              {`Clear completed [${completedItems.length}]`}
            </Button>)
      }
    </StyledFooter>
  );
}

export default Footer;
