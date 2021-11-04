import React from 'react'
import useInputState from '../hooks/useInputState';

function TodoForm(props) {
  const [inputVal, handleChange, resetInput] = useInputState('');

  const handleAddTodo = () => {
    if (!inputVal.trim()) {
      resetInput();
      return;  
    }
    props.addTodo(inputVal)
    resetInput();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo__form__container">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={inputVal}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="todo__addtodo" onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default TodoForm
