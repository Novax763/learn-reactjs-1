import { createContext, useReducer } from "react";
// reducer
import todosReducer from "../reducer/todosReducer";

export const TodosContext = createContext([]);
export const TodContext = createContext([]);

const TodosProvider = ({ children }) => {
        const [addTod, dispatched] = useReducer(todosReducer, [])
  return (
         
      <TodosContext.Provider value={{addTodoListe: addTod, dispatch: dispatched}}>
            {children}
      </TodosContext.Provider>
  )
};
export default TodosProvider;

// export const TodosContext = createContext([])
