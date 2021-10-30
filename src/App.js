
function App() {
  return (
    <div className="todo__container">
      <div className="todo__header">
        <h1>Todo App | 2021.10.30</h1>
      </div>
      <div className="todo__form__container">
        <input type="text" />
        <button className="todo__addtodo">Add a todo</button>
      </div>
      <div className="todos__container">
        <div className="todo__item">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab numquam commodi necessitatibus, eius atque sit accusamus voluptas esse labore magni! Atque placeat magnam voluptates aperiam? Unde nulla magnam libero!</p>
          <div className="todo__item__actions">
            <button className="todo__item__update">
              Toggle
            </button>
            <button className="todo__item__delete">
              Delete
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
