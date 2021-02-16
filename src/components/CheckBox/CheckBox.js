import React from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.input`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translate(0, -50%);
  width: 40px;
  height: 40px;
  transition: .3s linear;
  opacity: 0;
  cursor: pointer;
`;

class CheckBox extends React.Component {
  render() {
    return (
      <StyledCheckBox
        className="checkbox"
        type="checkbox"
        onClick={this.props.onCheckboxClick}
      />
    );
  }
}

export default CheckBox;
