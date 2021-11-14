import React, { useContext, useEffect, useRef } from 'react';
import { TodoContext } from '../context/TodoContext';
import useInputState from '../hooks/useInputState';
import useToggle from '../hooks/useToggle';
import { FiTrash, FiCheckSquare, FiSquare, FiEdit, FiCheck } from "react-icons/fi";
import { joinClasses } from '../helpers/utils';

function TodoItem(props) {
  const { deleteTodo, updateTodo, toggleTodo } = useContext(TodoContext);
  const [isUpdating, toggleUpdating] = useToggle(false);
  const [inputVal, handleChange] = useInputState(props.text);
  
  const handleEdit = () => {
    if(!isUpdating) {
      toggleUpdating();
      return;
    }

    updateTodo(props.id, inputVal);
    toggleUpdating();
  };

  const textareaRef = useRef(null);
  const MIN_TEXTAREA_HEIGHT = 32;
  useEffect(() => {
    if (isUpdating) {
      textareaRef.current.focus();
      
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      ) + 8}px`;
    }
  },[isUpdating])

  const todoItemStyle = joinClasses('todo__item', props.isDone ? 'isDone' : '');
  return (
    <div className={todoItemStyle}>
      {isUpdating ? <textarea ref={textareaRef} value={inputVal} onChange={handleChange}></textarea> : <p>{props.text}</p>}
      <div className="todo__item__actions">
        
          {!isUpdating && <button
            className="todo__item__update"
            onClick={() => toggleTodo(props.id)}>
            {props.isDone ? <FiCheckSquare /> : <FiSquare />}
          </button>}

          {!isUpdating && <button
            className="todo__item__delete"
            onClick={() => deleteTodo(props.id)}>
            <FiTrash />
          </button>}

        <button className="todo__item__edit" onClick={handleEdit}>
          {isUpdating ? <FiCheck /> : <FiEdit />}
        </button>
      </div>
    </div>
  )
}

export default TodoItem
