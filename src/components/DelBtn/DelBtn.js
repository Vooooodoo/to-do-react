import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(0, -50%);
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  margin: 0;
  transition: .3s linear;
  text-transform: uppercase;
  font-size: 30px;
  cursor: pointer;
  background-color: #af1045;
  opacity: 0;
  border-radius: 3px;
`;

class DelBtn extends React.Component {
  render() {
    return (
      <Btn className="del-btn" type="button" aria-label="Удалить дело." onClick={this.props.onDelBtnClick}>x</Btn>
    );
  }
}

export default DelBtn;
