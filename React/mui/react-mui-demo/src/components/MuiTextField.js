import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const MuiTextField = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type="password"
          helperText="Don't Share Your Password With Anyone"
          disabled
          size="small"
          color="info"
          required
        />
        <TextField
          label="Read Only"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Don't Share Your Password With Anyone"
          }
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Type Your Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color={visible ? "info" : ""}
                  onClick={() => setVisible(!visible)}
                >
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={visible ? "text" : "password"}
        />
      </Stack>
    </Stack>
  );
};
