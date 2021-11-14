import React, { useContext, useRef, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoFormContext } from '../context/TodoFormContext';
import { FiPlus } from "react-icons/fi";

function TodoForm({ submitCallback }) {
  const { addTodo } = useContext(TodoContext);
  const { pendingTodo, setPendingTodo, resetPendingTodo } = useContext(TodoFormContext);

  const handleChange =  (e) => {
    setPendingTodo(e.target.value);
    setHeight();
  };

  const handleAddTodo = () => {
    if (!pendingTodo.trim()) {
      resetPendingTodo();
      return;  
    }
    addTodo(pendingTodo)
    resetPendingTodo();
    submitCallback();
  }
  
  const textareaRef = useRef(null);
  
  useEffect(() => {
    textareaRef.current.focus();
    setHeight();
  },[])
  
  const MIN_TEXTAREA_HEIGHT = 32;
  const MAX_TEXTAREA_HEIGHT = 300;
  const setHeight = () => {
    textareaRef.current.style.height = "inherit";
    const calculatedHeight = Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    ) + 8;
    const newHeight = Math.min(calculatedHeight, MAX_TEXTAREA_HEIGHT);
    textareaRef.current.style.height = `${newHeight}px`;
  };

  return (
    <div className='todo__form__container'>
      <textarea
        placeholder="What do you need to do?"
        ref={textareaRef}
        value={pendingTodo}
        onChange={handleChange}></textarea>

      <button onClick={handleAddTodo} className="todo__addtodo">
        <FiPlus />
        <p>Submit</p>
      </button>
    </div>
  )
}

export default TodoForm
