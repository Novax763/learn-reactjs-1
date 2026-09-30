import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbars({ ope, del }) {
  function handleDel() {
    if (del === true) {
      return "تم الحدف بنجاح";
    } else if (del === false) {
      return "تم التعديل بنجاح";
    } else if (del === "addTodo") {
      return "تم الاضافة الى المنجز بنجاح"
    } else if (del === "notAddTodo") {
      return "تم الاضافة الى غير منجز بنجاح"
    } else if (del === "Good") {
      return "تم الاضافة بنجاح";
    }
  }

  return (
    <div>
      <Snackbar open={ope} autoHideDuration={3000}>
        <Alert
          //   onClose={funClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {handleDel()}
        </Alert>
      </Snackbar>
    </div>
  );
}
