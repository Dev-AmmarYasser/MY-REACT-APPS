import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState(4);
  console.log({ value });
  const handleChange = (event, newVal) => {
    setValue(newVal);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon size="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon size="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
