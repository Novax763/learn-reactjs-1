import React from "react";

import TodoComponent from "./TodoComponent";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Grid from "@mui/material/GridLegacy";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// useState()
import { useContext, useState, useEffect } from "react";

// useContext()
import { TodoListContext } from "../contexts/todoList";

// unidv4
import { v4 as uuidv4 } from "uuid";

export default function TodolList() {
  const [displayAllNotTask, setDisplayAllNotTask] = useState("all");
  const { addTodoList, setaddTodoList } = useContext(TodoListContext);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("todos")) ?? [];
    setaddTodoList(info);
  }, []);
  function handleTaskContiune(e) {
    setDisplayAllNotTask(e.target.value);
  }

  const [add, setAdd] = useState("");

  function handleAddClikc() {
    if (add.length > 0) {
      const handle = [
        ...addTodoList,
        { id: uuidv4(), title: add, body: "", isCompleted: false },
      ];
      setaddTodoList(handle);
      setAdd("");
      localStorage.setItem("todos", JSON.stringify(handle));
    }
  }

  //  Filter
  const completedTods = addTodoList.filter((value) => {
    return value.isCompleted;
  });
  //  Filter
  const notCompletedTods = addTodoList.filter((value) => {
    return !value.isCompleted;
  });

  let todosToBeRendered = addTodoList
  if (displayAllNotTask == "completed") {

    todosToBeRendered = completedTods;
  } else if (displayAllNotTask == 'non-completed') {

    todosToBeRendered = notCompletedTods;

  } else {
    todosToBeRendered = addTodoList;
  }
  const addList = todosToBeRendered.map((value) => {
    return <TodoComponent key={value.id} todo={value} />;
  });


  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        className="hei"
        style={{
          maxHeight: "80vh",
          overflow: "scroll",
        }}
      >
        <CardContent>
          {/* Header */}
          <Typography
            variant="h1"
            className="my-task"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            مهامي
          </Typography>
          <Divider variant="middle" />

          {/* Start  Button  */}
          <ToggleButtonGroup
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              direction: "ltr",
            }}
            color="primary"
            // value={alignment}
            exclusive
            // onChange={handleChange}
            aria-label="Platform"
            value={displayAllNotTask}
            onChange={handleTaskContiune}
          >
            <ToggleButton value="non-completed" style={{ color: "red" }}>
              غير منجز
            </ToggleButton>

            <ToggleButton value="completed" style={{ color: "green" }}>
              منجز
            </ToggleButton>

            <ToggleButton value="all" style={{ color: "blue" }}>
              {addTodoList.length} الكل
            </ToggleButton>
          </ToggleButtonGroup>

          {/* End Button  */}
          {/* TodoComponent */}

          {addList}

          {/* input && ADD  */}

          <Grid container marginTop="30px">
            <Grid xs={8}>
              <TextField
                style={{ width: "95%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={add}
                onChange={(events) => {
                  setAdd(events.target.value);
                }}
              />
            </Grid>
            <Grid xs={4}>
              <Button
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "20px",
                }}
                variant="contained"
                onClick={handleAddClikc}
                disabled={add.length <= 0}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>

          {/* ===== input && ADD ==== */}
        </CardContent>
      </Card>
    </Container>
  );
}
