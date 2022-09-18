import React, { useState } from "react";
import classes from './TodoForm.module.css';

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.random().toString(),
      text: inputValue
    });

    setInputValue('');
  }
  
  return (
    <form className={classes['todo-form']} onSubmit={onSubmitHandler}>
      <input
        className={classes['todo-input']}
        placeholder="Add a todo"
        value={inputValue}
        type="text"
        onChange={onChangeHandler}
      />
      <button className={classes['todo-btn']}>Add</button>
    </form>
  );
}

export default TodoForm;