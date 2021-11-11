import React, { useState, useContext, useRef } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TodoFormContext } from '../context/TodoFormContext';
import Modal from './Modal';
import { FiPlusSquare } from "react-icons/fi";
import DateTimePicker from 'react-datetime-picker';

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const { pendingTodo, setPendingTodo, resetPendingTodo } = useContext(TodoFormContext);
  const modal = useRef(null)

  const [value, onChange] = useState(new Date());
  const handleDateChange = (x) => {
    console.log(x)
    console.log(new Date().getTime())
    onChange(x)
  }
  const handleChange =  (e) => {
    setPendingTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (!pendingTodo.trim()) {
      resetPendingTodo();
      return;  
    }
    addTodo(pendingTodo)
    resetPendingTodo();
    modal.current.open();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className='todo__form__container'>
          {/* <DateTimePicker disableClock={true} onChange={handleDateChange} value={value} /> */}

          <div>
            <input
              type="text"
              placeholder="What do you need to do?"
              value={pendingTodo}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button className="todo__addtodo" onClick={handleAddTodo}>
              <FiPlusSquare />
            </button>
          </div> 
      </div>
      <Modal ref={modal}>
          TEST modal
      </Modal>
    </>
  )
}

export default TodoForm
