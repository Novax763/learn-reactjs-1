import "./App.css";
import Material from "./Material";
import ToggleButton from "./ToggleButton";
import IconAvatars from "./IconAvatars";
import GidsCompenete from "./GidsCompenete";

import * as React from "react";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green, purple, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Switch } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  const sectionData = [
    "Need help",
    "Improvement",
    "New feature",
    "Bug fix",
    "Soufaine",
    "Skills",
  ];

  const themeColor = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });
  function PopperComponent(props) {
    const { disablePortal, anchorEl, open, ...other } = props;
    return <div {...other} />;
  }

  PopperComponent.propTypes = {
    anchorEl: PropTypes.any,
    disablePortal: PropTypes.bool,
    open: PropTypes.bool.isRequired,
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (

    // lg   sm    md     xs
    <Container maxWidth="lg">
      <ThemeProvider theme={themeColor}>
        <div className="App">
          <Material />
          <div>
            <ToggleButton />
          </div>
          <div>
            <IconAvatars />
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 320,
                minHeight: 220,
              }}
            >
              <Autocomplete
                open
                options={sectionData}
                renderInput={(params) => <TextField {...params} />}
                slots={{
                  popper: PopperComponent,
                }}
              />
            </Box>
          </div>
          <div>
            <Switch
              color="secondary"
              checked={checked}
              onChange={handleChange}
              slotProps={{ input: { "aria-label": "controlled" } }}
            />
          </div>
          <div>
            <GidsCompenete />
          </div>
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
