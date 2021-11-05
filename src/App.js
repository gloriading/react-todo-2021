import React, { useState, useEffect, useContext } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import ThemeToggle from './components/ThemeToggle';
import TodoFormSlideDown from './components/TodoFormSlideDown';
import useScrollDown from './hooks/useScrollDown';
import { ThemeContext } from './context/ThemeContext';
import './App.scss';

function App() {
  const { theme } = useContext(ThemeContext);
  const [mainBgClass, setMainBgClass] = useState('');
  useEffect(() => {
    const themeMap = {
      warm: 'warm__background',
      chill: 'chill__background'
    };
    setMainBgClass(themeMap[theme]);
  }, [theme]);

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
  
  return (
    <div className='todo__container'>
      <div className={isScrollDown ? 'slideDown__show': 'slideDown__hidden'}>
        <TodoFormSlideDown
          addTodo={addTodo}
          todoCount={todoCount}
          doneCount={doneCount}
        />
      </div>
      <div className={['todo__header', mainBgClass].join(' ')}>
        <h1>Yup, I'm a Todo App</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="todos__container">
        {todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
      </div>
      <div className={['footer', mainBgClass].join(' ')}>
        <p>2021.10.30 +</p>
        <p>
          <ThemeToggle themeName='warm' />
          <span className="divider">|</span>
          <ThemeToggle themeName='chill' />
        </p>
      </div>
    </div>
  );
}

export default App;
