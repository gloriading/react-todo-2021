import React from 'react'
import TodoForm from './TodoForm';
import ussThemeColors from '../hooks/ussThemeColors';
import { FiChevronUp } from "react-icons/fi";
import { joinClasses } from '../helpers/utils';

function TodoFormSlideDown(props) {
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
        <TodoForm addTodo={props.addTodo} />
      </div>
      <p className={mainTextClass}> { props.doneCount} / { props.todoCount } </p>
    </div>
  )
}

export default TodoFormSlideDown
