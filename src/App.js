import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const mockTodos = [
    { id: 1, text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab numquam commodi necessitatibus, eius atque sit accusamus voluptas esse labore magni! Atque placeat magnam voluptates aperiam? Unde nulla magnam libero!', isDone: false },
  ];

  const [todos, setTodos] = useState(mockTodos);
  const addTodo = (content) => {
    const newTodo = {
      id: Math.random()* 10000,
      text: content,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== index))
  };
  
  const toggleTodo = (index) => {
    const updatedTodos = todos.map(todo => todo.id === index ? {...todo, isDone: !todo.isDone} : todo)

    setTodos(updatedTodos);
  };
  
  return (
    <div className="todo__container">
      <div className="todo__header">
        <h1>Todo App | 2021.10.30</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="todos__container">
        {todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
      </div>
    </div>
  );
}

export default App;
