import React from 'react';
import MainInput from '../MainInput';
import ToDoList from '../ToDoList';

class Main extends React.Component {
  render() {
    return (
      <main>
        <MainInput
          inputValue={this.props.inputValue}
          onChange={this.props.onChange}
          onKeyDown={this.props.onKeyDown}
        />
        <ToDoList
          onCheckboxChange={this.props.onCheckboxChange}
          onDelBtnClick={this.props.onDelBtnClick}
        />
      </main>
    );
  }
}

export default Main;
