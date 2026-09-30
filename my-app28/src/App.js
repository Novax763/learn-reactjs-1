import "./App.css";
import TodolList from "./components/TodolList";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodoListContext } from "./contexts/todoList";
// unidv4
import { v4 as uuidv4 } from "uuid";

/// useEffect Hook In React and useSatate
import { useState, useEffect, useContext } from "react";

/// snackbar
import SnackbarTodoList from "./components/SnackbarTodoList";

/// useReducer Context 
import TodosProvider from "./contexts/todosContext";

import { TodosContext } from "./contexts/todosContext";


//// learn Hook In React
//// 1 useState
//// 2 useContext
//// 3 useEffect
//// 4 useMemo


const theme = createTheme({
  typography: {
    fontFamily: ["A"],
  },
  palette: {
    primary: {
      main: "#00695c",
    },
  },
});

// CRUD   C => Create  ;  R => Read ; U => Update  ; D => Delete
function App() {
  // const info = JSON.parse(localStorage.getItem("todos"))

  const [addTodoList, setaddTodoList] = useState([]);
  // const data = useContext(TodosContext)

  // useEffect(() => {
  //   const info = JSON.parse(localStorage.getItem("todos"));
  //   setaddTodoList(info)
  // }, []);

  // setaddTodoList(info)

  /// alert accse
  const [open, setOpen] = useState(false);
  const [cont, setCont] = useState(null)

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  return (
    <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#191b1f",
            direction: "rtl",
            fontFamily: "A",
          }}
        >
          <TodoListContext.Provider value={{ addTodoList, setaddTodoList }}>
            <TodolList det={cont} setDet={setCont} handleClick={handleClick} />
          </TodoListContext.Provider>

          <SnackbarTodoList ope={open} del={cont} />
        </div>
    </ThemeProvider>
  );
}

export default App;

// taalim.ma
