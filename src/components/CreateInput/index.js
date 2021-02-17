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
  margin-bottom: 1px;
  outline-color: ${props => props.isMaxLength ? '#af1045' : 'black'};
  color: ${props => props.isMaxLength ? '#af1045' : 'black'};
`;

const ValidationMessage = styled.p`
  margin: 0 0 11px;
  padding-left: 15px;
`;

function CreateInput(props) {
  const isMaxLength = React.useContext(ToDoItemsContext).isMaxLength;

  return (
    <section>
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={props.inputValue}
        isMaxLength={isMaxLength}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      {isMaxLength
        && (<ValidationMessage>{`${props.inputValue.length} characters limit`}</ValidationMessage>)
      }
    </section>
  );
}

export default CreateInput;
