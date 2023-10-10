import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipDel) => {
    setChips(chips.filter((chip) => chip !== chipDel));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
      />
      <Chip
        label="Click"
        size="small"
        color="success"
        onClick={() => alert("Clicked")}
      />

      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete Handler Called")}
        size="small"
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
          size="small"
          color="primary"
        />
      ))}
    </Stack>
  );
};
