import React from "react";
import Todo from "./Todo";
import classes from './TodoList.module.css';

const TodoList = (props) => {
  return (
    <ul className={classes['todo-ul']}>
      {props.todos.map(todo => (
        <Todo 
          key={todo.id}
          todo={todo}
          onRemove={props.removeTodo}
          onUpdate={props.updateTodo}
          onComplete={props.completeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;