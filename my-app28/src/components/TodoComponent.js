import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/GridLegacy";

import DeleteIcon from "@mui/icons-material/Delete";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import IconButton from "@mui/material/IconButton";
import EditSquareIcon from "@mui/icons-material/EditSquare";


export default function TodoComponent({ handleTodoIsCompleted,todo, handleClickO, handleEditC }) {
  function handleTodoIs(event) {
    handleTodoIsCompleted(event)
  }

  /// delted
  function handleClickOpen(eve) {
    handleClickO(eve);
  }

  // edit

  function handleEditClose(evetId) {
    handleEditC(evetId);
  }

  return (
    <>
      {/* delet */}

      {/* === delet ==== */}

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
                    handleTodoIs(todo.id);
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
