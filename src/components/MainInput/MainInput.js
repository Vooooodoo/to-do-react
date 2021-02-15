import React from 'react';
import styled from 'styled-components';
import { ToDoItemsContext } from '../../contexts/ToDoItemsContext';

const Input = styled.input`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  font-size: 24px;
  padding: 0 15px;
  border: none;
  margin-bottom: 10px;
`;

class MainInput extends React.Component {
  static contextType = ToDoItemsContext;

  handleEnter = (evt) => {
    if (evt.key === 'Enter' && this.context.inputValue) {
      let toDoItemsArr = this.context.toDoItems;
      const id = Date.now();
      const newToDoItem = {
        id,
        text: this.context.inputValue,
      }

      toDoItemsArr.push(newToDoItem);
      localStorage.setItem('to-do-items', JSON.stringify(toDoItemsArr));
    }
  }

  render() {
    return (
      <section>
        <Input type="text" maxLength="10" placeholder="What needs to be done?" onChange={this.props.onChange} onKeyDown={this.handleEnter} />
      </section>
    );
  }
}

export default MainInput;
