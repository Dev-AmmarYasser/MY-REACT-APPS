import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(e, newVal) => setValue(newVal)}
      showLabels
    >
      <BottomNavigationAction icon={<HomeIcon />} label="Home" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Fav" />
      <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
      <BottomNavigationAction icon={<HomeIcon />} label="Home" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Fav" />
    </BottomNavigation>
  );
};
