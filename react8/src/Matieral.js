import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";



export default function Matieral() {
      const [checked, setChecked] = React.useState(true);

      const handleChange = (event) => {
        setChecked(event.target.checked);
      };



  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <hr /> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "center" }}>
            <Switch
              checked={checked}
              onChange={handleChange}
              slotProps={{ input: { "aria-label": "controlled" } }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div
        style={{
            padding: "20px 0px 0px 0px",
          backgroundColor: "orange",
          marginTop: "50px",
          textAlign: "center",
          height: checked ? "100px" : "300px" ,
        }}
      >
        <h3> hello world :) </h3>
      </div>
    </div>
  );
}
