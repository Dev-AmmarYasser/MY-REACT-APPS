import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constans";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      zIndex: 100,
      borderBottom: "1px solid #3d3d3d",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <span
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "30px",
          marginLeft: "15px",
          fontWeight: "bold",
        }}
      >
        Amtube
      </span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
