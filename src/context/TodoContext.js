import { createContext, useState, useEffect } from "react";
import { TodoFormProvider } from './TodoFormContext';
export const TodoContext = createContext();

const mockTodos = [...Array(20).keys()].map(elm => {
  return {
    id: elm, text: elm + ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab numquam commodi necessitatibus, eius atque sit accusamus voluptas esse labore magni!', isDone: false
  }
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(mockTodos);
  const addTodo = (content) => {
    const newTodo = {
      id: Math.random()* 10000,
      text: content,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = (index, newContent) => {
    const updatedTodos = todos.map(todo => todo.id === index ? {...todo, text: newContent } : todo)
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== index))
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map(todo => todo.id === index ? {...todo, isDone: !todo.isDone} : todo)

    setTodos(updatedTodos);
  };

  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    setTodoCount(todos.filter(todo => !todo.isDone).length);
    setDoneCount(todos.filter(todo => !!todo.isDone).length);
  }, [todos])

  return (
    <TodoContext.Provider value={{ todoCount, doneCount, todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <TodoFormProvider>
        {children}
      </TodoFormProvider>
    </TodoContext.Provider>
  )
};