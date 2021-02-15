import React from 'react';
import MainInput from '../MainInput/MainInput';
import ToDoList from '../ToDoList/ToDoList';

class Main extends React.Component {
  render() {
    return (
      <main>
        <MainInput onChange={this.props.onChange} />
        <ToDoList />
      </main>
    );
  }
}

export default Main;
