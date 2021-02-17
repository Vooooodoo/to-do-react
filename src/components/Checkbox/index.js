import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(0, -50%);
  width: 30px;
  height: 30px;
  transition: .3s linear;
  cursor: pointer;
  margin: 0;
`;

function Checkbox(props) {
  return (
    <StyledCheckbox
      type="checkbox"
      onChange={evt => props.onCheckboxChange(evt, props.toDoItemId)}
      checked={props.isChecked}
    />
  );
}

export default Checkbox;
