import React from 'react';
import CreateInput from '../CreateInput';
import ToDoList from '../ToDoList';

function Main(props) {
  return (
    <main>
      <CreateInput
        inputValue={props.inputValue}
        placeholder="What needs to be done?"
        onChange={props.onCreateInputChange}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
        isMaxLength={props.isMaxLength}
      />
      <ToDoList
        inputValue={props.inputValue}
        onEditInputChange={props.onEditInputChange}
        onCheckboxChange={props.onCheckboxChange}
        onDelBtnClick={props.onDelBtnClick}
        onToDoItemDblClick={props.onToDoItemDblClick}
        onBlur={props.onBlur}
      />
    </main>
  );
}

export default Main;
