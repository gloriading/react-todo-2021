import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import useInputState from '../hooks/useInputState';
import { FiPlusSquare } from "react-icons/fi";
import DateTimePicker from 'react-datetime-picker';

function TodoForm() {
  const { addTodo } = useContext(TodoContext)
  const [inputVal, handleChange, resetInput] = useInputState('');
  const [value, onChange] = useState(new Date());
  const handleDateChange = (x) => {
    console.log(x)
    console.log(new Date())
    onChange(x)
  }

  const handleAddTodo = () => {
    if (!inputVal.trim()) {
      resetInput();
      return;  
    }
    addTodo(inputVal)
    resetInput();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className='todo__form__container'>
        {/* <DateTimePicker disableClock={true} onChange={handleDateChange} value={value} /> */}

        <div>
          <input
            type="text"
            placeholder="What do you need to do?"
            value={inputVal}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="todo__addtodo" onClick={handleAddTodo}>
            <FiPlusSquare />
          </button>
        </div>
        
    </div>
  )
}

export default TodoForm
