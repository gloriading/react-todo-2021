import React, { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import TodoFormSlideDown from './components/TodoFormSlideDown';
import useScrollDown from './hooks/useScrollDown';
import useThemeColors from './hooks/useThemeColors';
import { joinClasses } from './helpers/utils';
import './App.scss';

function App() {
  const [mainBgClass, mainTextClass] = useThemeColors();
  const { todos, doneCount, todoCount  } = useContext(TodoContext);
  const isScrollDown = useScrollDown();
  const headerStyle = joinClasses('todo__header', mainBgClass, mainTextClass);
  
  return (
    <div className='todo__container'>
      <div className={isScrollDown ? 'slideDown__show': 'slideDown__hidden'}>
        <TodoFormSlideDown />
      </div>
      
      <div className={headerStyle}>
        <h1>G.todo</h1>
        <AddTodo />
        <div className="todos__data">
          <p className={mainTextClass}> { doneCount} / { todoCount } </p>
        </div>
      </div>
      
      
      <div className="todos__container">
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </div>

      <Footer />
    </div>
  );
}

export default App;
