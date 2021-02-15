import React from 'react';
import MainInput from '../MainInput/MainInput';
import ToDoList from '../ToDoList/ToDoList';

class Main extends React.Component {
  render() {
    return (
      <main>
        <MainInput
          inputValue={this.props.inputValue}
          onChange={this.props.onChange}
          onKeyDown={this.props.onKeyDown}
        />
        <ToDoList />
      </main>
    );
  }
}

export default Main;
