import React, { useRef } from 'react'
import Modal from './Modal';
import TodoForm from './TodoForm';

function AddTodo() {
  const modal = useRef(null);
  const openTodoForm = () => {
    modal.current.open();
  };
  const submitCallback = () => {
    modal.current.close();
  };
  
  return (
    <>
      <span
        aria-label="Open todo form"
        onClick={openTodoForm}
        className="addTodo__action">
        <p>Add Todo</p>
      </span>
     
      <Modal ref={modal}>
          <TodoForm submitCallback={submitCallback} />
      </Modal>
    </>
  )
}

export default AddTodo
