import React from 'react';
import AddTodo from './AddTodo';
import useThemeColors from '../hooks/useThemeColors';
import { FiChevronUp } from "react-icons/fi";
import { joinClasses } from '../helpers/utils';

function TodoFormSlideDown() {
  const [mainBgClass, mainTextClass] = useThemeColors();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  const slideDownClass = joinClasses('todoFormSlideDown', mainBgClass);

  return (
    <div className={slideDownClass}>
      <h2 className={mainTextClass}>G.todo</h2>

      <div className="todoFormSlideDown__form">
        <AddTodo />
      </div>

      <div className="goTop" onClick={goToTop}>
        <FiChevronUp />
      </div>
    </div>
  )
}

export default TodoFormSlideDown
