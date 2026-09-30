import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import SignalWifiBadIcon from "@mui/icons-material/SignalWifiBad";


export default function Material() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        color="secondary"
        onClick={() => {
          console.log("this is Contained");
        }}
        variant="contained"
      >
        Contained
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="outlined" size="large">
        Link
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
        Send
      </Button>
      <SignalWifiBadIcon color="secondary" style={{fontSize: "40px"}} />
    </Stack>
  );
}