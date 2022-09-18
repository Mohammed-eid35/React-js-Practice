import React, { useState } from "react";
import Container from "./components/Container";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const onAddTodoHandler = (todo) => {
    if (todo.text.trim().length === 0) {
      return;
    }
    
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const onRemoveTodoHandler = (id) => {
    const newTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const onUpdateTodoHandler = (id, newValue) => {
    if (newValue.trim().length === 0) {
      return;
    }

    const newTodos = [...todos].map(todo => todo.id === id ? {id, text: newValue, isCompleted: todo.isCompleted} : todo);
    setTodos(newTodos);
  };

  const onCompleteTodoHandler = (id) => {
    const newTodos = [...todos].map(todo => todo.id === id ? {id, text: todo.text , isCompleted: !todo.isCompleted} : todo);
    setTodos(newTodos);
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <TodoForm onSubmit={onAddTodoHandler} />
      <TodoList 
        todos={todos}
        removeTodo={onRemoveTodoHandler}
        updateTodo={onUpdateTodoHandler}
        completeTodo={onCompleteTodoHandler}
      />
    </Container>
  );
}

export default App;