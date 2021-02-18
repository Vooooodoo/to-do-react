import React from 'react';
import CreateInput from '../CreateInput';
import ToDoList from '../ToDoList';

function Main(props) {
  return (
    <main>
      <CreateInput
        inputValue={props.inputValue}
        placeholder="What needs to be done?"
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
      />
      <ToDoList
        inputValue={props.inputValue}
        onChange={props.onChange}
        onCheckboxChange={props.onCheckboxChange}
        onDelBtnClick={props.onDelBtnClick}
        onToDoItemDblClick={props.onToDoItemDblClick}
        onBlur={props.onBlur}
      />
    </main>
  );
}

export default Main;
