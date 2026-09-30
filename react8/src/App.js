import "./App.css";
import React from "react";
import Matieral from "./Matieral";
import Container from "@mui/material/Container";

import Switch from "@mui/material/Switch";

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    // lg   sm    md     xs
    <div className="App" style={{ paddingTop: "100px",
      height: "100vh"
      ,backgroundColor: checked ? "#01579b" : "aliceblue"

     }}>
      <Container maxWidth="lg">
        <Switch
          checked={checked}
          onChange={handleChange}
          slotProps={{ input: { "aria-label": "controlled" } }}
        />
        <Matieral />

        <hr style={{ margin: "20px" }} />
      </Container>
    </div>
  );
}

export default App;
