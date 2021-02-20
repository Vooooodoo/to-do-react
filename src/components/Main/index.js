import React from 'react';
import CreateInput from '../CreateInput';
import ToDoList from '../ToDoList';

function Main(props) {
  return (
    <main>
      <CreateInput
        inputValue={props.createInputValue}
        isMaxLength={props.isCreateInputMaxLength}
        placeholder="What needs to be done?"
        onChange={props.onCreateInputChange}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
      />
      <ToDoList
        inputValue={props.editInputValue}
        isEditInputMaxLength={props.isEditInputMaxLength}
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
