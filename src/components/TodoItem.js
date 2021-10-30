import React from 'react'

function TodoItem(props) {
  const handleDelete = (id) => {
    props.deleteTodo(id);
  }

  return (
    <div className="todo__item">
      <p>{props.text}</p>
      <div className="todo__item__actions">
        <button className="todo__item__update" onClick={() => props.toggleTodo(props.id)}>
          {props.isDone ? 'Done' : 'Todo'}
        </button>
        <button className="todo__item__delete" onClick={() => handleDelete(props.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
