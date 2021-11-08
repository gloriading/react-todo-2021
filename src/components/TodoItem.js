import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { FiTrash, FiCheckSquare, FiSquare } from "react-icons/fi";

function TodoItem(props) {
  const { deleteTodo, updateTodo, toggleTodo } = useContext(TodoContext);
  

  return (
    <div className="todo__item">
      <p>{props.text}</p>
      {/* <textarea></textarea> */}
      <div className="todo__item__actions">
        <button className="todo__item__update" onClick={() => toggleTodo(props.id)}>
          {props.isDone ? <FiCheckSquare /> : <FiSquare />}
        </button>
        <button className="todo__item__delete" onClick={() => deleteTodo(props.id)}>
          <FiTrash />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
