import { createContext, useState } from "react";

export const TodoFormContext = createContext();
export const TodoFormProvider = ({ children }) => {
  const [pendingTodo, setPendingTodo] = useState('');
  const resetPendingTodo = () => setPendingTodo('');

  return (
    <TodoFormContext.Provider value={{ pendingTodo, setPendingTodo, resetPendingTodo }}>
      {children}
    </TodoFormContext.Provider>
  )
};
