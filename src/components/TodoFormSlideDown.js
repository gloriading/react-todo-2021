import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import TodoForm from './TodoForm';
import ussThemeColors from '../hooks/ussThemeColors';
import { FiChevronUp } from "react-icons/fi";
import { joinClasses } from '../helpers/utils';

function TodoFormSlideDown() {
  const { addTodo, doneCount, todoCount } = useContext(TodoContext);
  const [mainBgClass, mainTextClass] = ussThemeColors();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  const slideDownClass = joinClasses('todoFormSlideDown', mainBgClass);

  return (
    <div className={slideDownClass}>
      <div className="goTop" onClick={goToTop}>
        <FiChevronUp />
      </div>
      <div className="todoFormSlideDown__form">
        <TodoForm />
      </div>
      <p className={mainTextClass}> { doneCount} / { todoCount } </p>
    </div>
  )
}

export default TodoFormSlideDown
