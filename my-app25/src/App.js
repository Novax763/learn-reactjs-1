import "./App.css";
import TodolList from "./components/TodolList";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodoListContext } from "./contexts/todoList";
// unidv4
import { v4 as uuidv4 } from "uuid";



/// useEffect Hook In React and useSatate
import { useState, useEffect} from "react";
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

  // useEffect(() => {
  //   const info = JSON.parse(localStorage.getItem("todos"));
  //   setaddTodoList(info)
  // }, []);

  
  // setaddTodoList(info)
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
          <TodolList />
        </TodoListContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;

// taalim.ma
