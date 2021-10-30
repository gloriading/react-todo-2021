import React, { useState } from 'react'

function TodoForm(props) {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInputVal(newInput);
  };

  const handleAddTodo = () => {
    if (!inputVal.trim()) {
      setInputVal('')
      return;  
    }
    props.addTodo(inputVal)
    setInputVal('')
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
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="todo__addtodo" onClick={handleAddTodo}>Add a todo</button>
    </div>
  )
}

export default TodoForm
