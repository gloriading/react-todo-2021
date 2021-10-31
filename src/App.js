import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import TodoFormSlideDown from './components/TodoFormSlideDown';

function App() {
  const [showTopSearch, setShowTopSearch] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const SOHW_POINT = 190;
      if (window.scrollY > SOHW_POINT) {
        setShowTopSearch(true)
      } else {
        setShowTopSearch(false)

      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mockTodos = [...Array(10).keys()].map(elm => {
    return {
      id: elm, text: elm + ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab numquam commodi necessitatibus, eius atque sit accusamus voluptas esse labore magni! Atque placeat magnam voluptates aperiam? Unde nulla magnam libero!', isDone: false
    }
  });

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

  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDontCount] = useState(0);

  useEffect(() => {
    setTodoCount(todos.filter(todo => !todo.isDone).length);
    setDontCount(todos.filter(todo => !!todo.isDone).length);
  }, [todos])
  
  return (
    <div className="todo__container">
      <div className={showTopSearch ? 'slideDown__show': 'slideDown__hidden'}>
        <TodoFormSlideDown
          addTodo={addTodo}
          todoCount={todoCount}
          doneCount={doneCount}
        />
      </div>
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
