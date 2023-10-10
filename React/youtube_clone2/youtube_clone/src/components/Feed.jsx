import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("JS Mastery");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    // setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          padding: "30px",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 AM Media
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: "2", padding: "30px" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={6}
          sx={{ color: "white", fontFamily: "Rubik, sans-serif" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} contentCenter={false} />
      </Box>
    </Stack>
  );
};

export default Feed;
