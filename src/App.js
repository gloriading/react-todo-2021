import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import TodoFormSlideDown from './components/TodoFormSlideDown';
import useScrollDown from './hooks/useScrollDown';
import ussThemeColors from './hooks/ussThemeColors';
import { joinClasses } from './helpers/utils';
import './App.scss';

function App() {
  const [mainBgClass, mainTextClass] = ussThemeColors();
  const isScrollDown = useScrollDown();

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
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    setTodoCount(todos.filter(todo => !todo.isDone).length);
    setDoneCount(todos.filter(todo => !!todo.isDone).length);
  }, [todos])

  const headerStyle = joinClasses('todo__header', mainBgClass, mainTextClass);
  
  return (
    <div className='todo__container'>
      <div className={isScrollDown ? 'slideDown__show': 'slideDown__hidden'}>
        <TodoFormSlideDown
          addTodo={addTodo}
          todoCount={todoCount}
          doneCount={doneCount}
        />
      </div>
      
      <div className={headerStyle}>
        <h1>Yup, I'm a Todo App</h1>
      </div>
      
      <TodoForm addTodo={addTodo} />
      
      <div className="todos__container">
        {todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
      </div>

      <Footer />
    </div>
  );
}

export default App;
