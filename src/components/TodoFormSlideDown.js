import React from 'react'
import TodoForm from './TodoForm';

function TodoFormSlideDown(props) {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <div className="todoFormSlideDown">
      <div className="goTop" onClick={goToTop}>↑ Top</div>
      <div className="todoFormSlideDown__form">
        <TodoForm addTodo={props.addTodo} />
      </div>
      <p>Todo: { props.todoCount } | Done: { props.doneCount}</p>
    </div>
  )
}

export default TodoFormSlideDown
