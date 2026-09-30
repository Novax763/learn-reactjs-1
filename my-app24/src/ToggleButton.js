import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors'

export default function ToggleButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>S </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>J</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>SD</Avatar>
    </Stack>
  );
}