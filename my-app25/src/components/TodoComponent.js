import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/GridLegacy";

import DeleteIcon from "@mui/icons-material/Delete";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import IconButton from "@mui/material/IconButton";
import EditSquareIcon from "@mui/icons-material/EditSquare";

// useContext
import { useContext } from "react";
import { TodoListContext } from "../contexts/todoList";

// deletTodo
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

/// useContext
import { useState } from "react";

export default function TodoComponent({ todo }) {
  const { addTodoList, setaddTodoList } = useContext(TodoListContext);




  function handleTodoIsCompleted() {
    const updatedTodos = addTodoList.map((value) => {
      if (value.id == todo.id) {
        value.isCompleted = !value.isCompleted;
      }
      return value;
    });
    setaddTodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

  }


  function handleDeletClick() {
    setOpen({ ...open, ope: !open.ope });
    const deletTodo = addTodoList.filter((value) => {
      return value.id == open.evetId ? null : value;
    });
    setaddTodoList(deletTodo);
    localStorage.setItem("todos", JSON.stringify(deletTodo));

  }
  // function handleEditClick() {

  // }

  // delet
  const [open, setOpen] = useState({ ope: false, evetId: null });

  function handleClickOpen(eve) {
    if(editOpen.edit == false) {
      setOpen({ ope: !open.ope, evetId: eve });
    }
  }

  function handleClose() {
    if(editOpen.edit == false) {
      setOpen({ ope: !open.ope, evetId: null });
    }
  }

  // edit
  const [editOpen, setEditOpen] = useState({ edit: false, idEdit: null });
  const [editATask, seteditATask] = useState({place: "", conten: ""})
  function handleEditClose(evetId) {
    if (open.ope == false) {
      setEditOpen({...editOpen, edit: !editOpen.edit})
      addTodoList.map((value) => {
        if (value.id == evetId ) {
          seteditATask({place: value.title, conten: value.body})
        }
        
      })
    }
  }
  function handleEditATask(evets) {
    setEditOpen({ ...editOpen, edit: !editOpen.edit });
    const notupadte = addTodoList.map((value) => {
      if (value.id == evets.id) {
        return {...value, title: editATask.place, body: editATask.conten}
      } else {
        return value;
      }
    })
    setaddTodoList(notupadte)
    localStorage.setItem("todos", JSON.stringify(notupadte));
  }

  return (
    <>
      {/* delet */}

      <Dialog
        open={open.ope}
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
        open={editOpen.edit}
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
              handleEditATask(todo);
            }}
            style={{ fontFamily: "A", fontWeight: "bold", color: "red" }}
          >
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
      {/* === Edit ==== */}

      <Card
        className="cardContentTodo"
        sx={{
          minWidth: 275,
          textAlign: "center",
          color: "aliceblue",
          backgroundColor: "#283593",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid className="ble" container columns={12}>
            <Grid className="cont" xs={7}>
              <Typography
                className="titl"
                variant="h5"
                sx={{
                  textAlign: "right",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                className="bod"
                variant="h6"
                sx={{ textAlign: "right" }}
              >
                {todo.body}
              </Typography>
            </Grid>
            <Grid xs={4} paddingTop="15px">
              {/* button Icons */}
              <Typography
                variant="h5"
                display="flex"
                justifyContent="space-between"
                textAlign="center"
                className="ico"
              >
                <IconButton
                  className="iconsButton"
                  style={
                    !todo.isCompleted
                      ? {
                          color: "#8bc34a",
                          backgroundColor: "white",
                          border: "solid #8bc34a 3px",
                        }
                      : {
                          color: "aliceblue",
                          backgroundColor: "#8bc34a",
                          border: "solid aliceblue 3px",
                        }
                  }
                  variant="outlined"
                  onClick={() => {
                    handleTodoIsCompleted();
                  }}
                >
                  <OfflinePinIcon />
                </IconButton>
                <IconButton
                  className="iconsButton"
                  variant="outlined"
                  style={{
                    color: "#365e92",
                    backgroundColor: "white",
                    border: "solid #365e92 3px",
                  }}
                  onClick={() => {
                    handleEditClose(todo.id);
                  }}
                >
                  <EditSquareIcon />
                </IconButton>
                <IconButton
                  className="iconsButton"
                  variant="outlined"
                  style={{
                    color: "#c34a4a",
                    backgroundColor: "white",
                    border: "solid #c34a4a 3px",
                  }}
                  onClick={() => {
                    handleClickOpen(todo.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Typography>
              {/* ==== button Icons ==== */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
