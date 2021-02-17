import React from 'react';
import CreateInput from '../CreateInput';
import ToDoList from '../ToDoList';

function Main(props) {
  return (
    <main>
      <CreateInput
        inputValue={props.inputValue}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      <ToDoList
        onCheckboxChange={props.onCheckboxChange}
        onDelBtnClick={props.onDelBtnClick}
        onToDoItemDblClick={props.onToDoItemDblClick}
      />
    </main>
  );
}

export default Main;
