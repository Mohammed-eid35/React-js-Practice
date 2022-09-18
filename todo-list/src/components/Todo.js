import React, { useState } from "react";
import classes from './Todo.module.css';

const Todo = (props) => {
  const [edit, setEdit] = useState(false);
  const [newValue, setnewValue] = useState(false);

  const onRemoveHandler = () => props.onRemove(props.todo.id);
  const onUpdateHandler = () => setEdit(true);
  const onCompleteHandler = () => props.onComplete(props.todo.id);

  const onSubmit = (event) => {
    event.preventDefault();

    props.onUpdate(props.todo.id, newValue);
    setEdit(false);
  }

  const onChangeHandler = (event) => {
    setnewValue(event.target.value);
  }
  
  const liClasses = `${classes['todo-row']} ${props.todo.isCompleted ? classes['completed'] : ''}`; 
  return (
    <li className={liClasses}>
      {!edit &&
        <>
          <div>{props.todo.text}</div>
          <div>
            <button className={classes['todo-btn']} onClick={onCompleteHandler}>{`${props.todo.isCompleted ? "Unmark" : "Mark"}`}</button>
            <button className={classes['todo-btn']} onClick={onUpdateHandler}>Edit</button>
            <button className={classes['todo-btn']} onClick={onRemoveHandler}>Remove</button>
          </div>
        </>
      }
      {edit &&
        <form onSubmit={onSubmit}>
          <input
            className={classes['edit-input']}
            type="test"
            defaultValue={props.todo.text}
            onChange={onChangeHandler}
          />
          <button className={classes['edit-btn']}>update</button>
        </form>
      }
    </li>
  );
}

export default Todo;