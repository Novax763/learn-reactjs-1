import { useState } from "react";
import React from "react";

let user = "Ahmed";
let username = "Soufaine";
export default function Content() {
  let [value, valueBloc] = useState(username);

  function buton() {
    if (value === "Ahmed") {
      valueBloc(username);
    } else {
      valueBloc(user);
    }
  }
  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <button onClick={buton}>
        Click Me
      </button>
      <h1> {value} </h1>
    </div>
  );
}
