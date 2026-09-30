import React, { useDebugValue } from "react";

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
import { useContext, useState, useEffect, useMemo } from "react";

// useContext()
import { TodoListContext } from "../contexts/todoList";

// unidv4
import { v4 as uuidv4 } from "uuid";

// deletTodo
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function TodolList({ handleClick, setDet }) {
  const [displayAllNotTask, setDisplayAllNotTask] = useState("all");
  const { addTodoList, setaddTodoList } = useContext(TodoListContext);

  // delet
  const [open, setOpen] = useState(false);

  // edit
  const [editOpen, setEditOpen] = useState(false);
  const [editATask, seteditATask] = useState({ place: "", conten: "" });

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("todos")) ?? [];
    setaddTodoList(info);
  }, []);
  function handleTaskContiune(e) {
    setDisplayAllNotTask(e.target.value);
  }

  const [add, setAdd] = useState("");

  function handleAddClikc() {
    handleClick();
    setDet("Good");
    const handle = [
      ...addTodoList,
      { id: uuidv4(), title: add, body: "", isCompleted: false },
    ];
    setaddTodoList(handle);
    setAdd("");
    localStorage.setItem("todos", JSON.stringify(handle));
  }

  //  Filter
  const completedTods = useMemo(() => {
    return addTodoList.filter((value) => {
      return value.isCompleted;
    });
  }, [addTodoList]);
  //  Filter
  const notCompletedTods = useMemo(() => {
    return addTodoList.filter((value) => {
      return !value.isCompleted;
    });
  }, [addTodoList]);

  let todosToBeRendered = addTodoList;
  if (displayAllNotTask == "completed") {
    todosToBeRendered = completedTods;
  } else if (displayAllNotTask == "non-completed") {
    todosToBeRendered = notCompletedTods;
  } else {
    todosToBeRendered = addTodoList;
  }
  ///delete
  const [evid, setevid] = useState("");

  // delet

  function handleDeletClick() {
    handleClick();
    setDet(true);
    setOpen(!open);
    const deletTodo = addTodoList.filter((value) => {
      return value.id != evid;
    });
    setaddTodoList(deletTodo);
    localStorage.setItem("todos", JSON.stringify(deletTodo));
  }

  function handleClickOpen(eve) {
    setevid(eve);
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }

  /// edit
  function handleEditClose(evets) {
    setevid(evets);
    setEditOpen(!editOpen);
    addTodoList.map((value) => {
      if (value.id == evets) {
        seteditATask({ place: value.title, conten: value.body });
      }
    });
  }

  function handleEditATask() {
    handleClick();
    setDet(false);
    setEditOpen(!editOpen);
    const notupadte = addTodoList.map((value) => {
      if (value.id == evid) {
        return { ...value, title: editATask.place, body: editATask.conten };
      } else {
        return value;
      }
    });
    setaddTodoList(notupadte);
    localStorage.setItem("todos", JSON.stringify(notupadte));
  }
  /// Task Completed
  function handleTodoIsCompleted(eve) {
    const updatedTodos = addTodoList.map((value) => {
      if (value.id == eve) {
        value.isCompleted = !value.isCompleted;
        if (value.isCompleted) {
          handleClick();
          setDet("addTodo");
        } else {
          handleClick();
          setDet("notAddTodo");
        }
      }
      return value;
    });
    setaddTodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const addList = todosToBeRendered.map((value) => {
    return (
      <TodoComponent
        key={value.id}
        todo={value}
        handleClickO={handleClickOpen}
        handleEditC={handleEditClose}
        handleTodoIsCompleted={handleTodoIsCompleted}
      />
    );
  });
  return (
    <>
      {/* delet */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ direction: "rtl" }}>
          {"هل انت متاكد من رغبتك في حدف المهمة ؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ direction: "rtl" }}
          >
            لا تمكن التراجع عن الحدف في حال اختيار زر : (الحدف)
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ direction: "rtl" }}>
          <Button
            onClick={handleClose}
            style={{ fontWeight: "bold", color: "greey" }}
          >
            اغلاق
          </Button>
          <Button
            onClick={handleDeletClick}
            autoFocus
            style={{ fontWeight: "900", color: "red" }}
          >
            نعم.الحدف
          </Button>
        </DialogActions>
      </Dialog>

      {/* === delet ==== */}

      {/* Edit  */}
      <Dialog
        open={editOpen}
        onClose={handleEditClose}
        style={{ direction: "rtl" }}
      >
        <DialogTitle>تعديل المهمة</DialogTitle>

        <DialogContent>
          <TextField
            className="button"
            autoFocus
            required
            margin="dense"
            label="العنوان"
            type="text"
            fullWidth
            variant="standard"
            value={editATask.place}
            onChange={(event) => {
              seteditATask({ ...editATask, place: event.target.value });
            }}
            style={{ width: "500px", fontFamily: "A", fontWeight: "bold" }}
          />
          <TextField
            className="button"
            autoFocus
            required
            margin="dense"
            label="التفاصل"
            type="text"
            fullWidth
            variant="standard"
            value={editATask.conten}
            onChange={(event) => {
              seteditATask({ ...editATask, conten: event.target.value });
            }}
            style={{ width: "500px", fontFamily: "A", fontWeight: "bold" }}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleEditClose}
            style={{ fontFamily: "A", fontWeight: "bold" }}
          >
            الغاء
          </Button>
          <Button
            type="submit"
            form="subscription-form"
            onClick={() => {
              handleEditATask();
            }}
            style={{ fontFamily: "A", fontWeight: "bold", color: "red" }}
          >
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
      {/* === Edit ==== */}

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
    </>
  );
}
