import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translate(0, -50%);
  width: 40px;
  height: 40px;
  transition: .3s linear;
  opacity: 0;
  cursor: pointer;
  margin: 0;
`;

function Checkbox(props) {
  return (
    <StyledCheckbox
      className="checkbox"
      type="checkbox"
      onChange={evt => props.onCheckboxChange(evt, props.toDoItemId)}
      checked={props.isChecked}
    />
  );
}

export default Checkbox;
