import React from 'react';
import styled from 'styled-components';

const StyledRadio = styled.input`
  margin: 0;
  margin-right: 5px;
  cursor: pointer;
  width: 15px;
  height: 15px;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 16px;
  color: black;
`;

function Radio(props) {
  return (
    <Text>
      <StyledRadio
        type="radio"
        name="to-do-items"
        value={props.text}
        onChange={props.onRadioChange}
      />
      {props.text}
    </Text>
  );
}

export default Radio;
