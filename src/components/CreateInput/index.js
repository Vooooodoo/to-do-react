import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  font-size: 24px;
  padding: 0 15px;
  border: none;
  margin-bottom: 10px;
`;

function CreateInput(props) {
  return (
    <section>
      <Input
        type="text"
        maxLength="10"
        placeholder="What needs to be done?"
        value={props.inputValue}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </section>
  );
}

export default CreateInput;
