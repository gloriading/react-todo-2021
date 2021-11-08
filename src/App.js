import React, { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
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
  const { todos } = useContext(TodoContext);
  const isScrollDown = useScrollDown();
  const headerStyle = joinClasses('todo__header', mainBgClass, mainTextClass);
  
  return (
    <div className='todo__container'>
      <div className={isScrollDown ? 'slideDown__show': 'slideDown__hidden'}>
        <TodoFormSlideDown />
      </div>
      
      <div className={headerStyle}>
        <h1>Yup, I'm a Todo App</h1>
      </div>
      
      <TodoForm />
      
      <div className="todos__container">
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </div>

      <Footer />
    </div>
  );
}

export default App;
