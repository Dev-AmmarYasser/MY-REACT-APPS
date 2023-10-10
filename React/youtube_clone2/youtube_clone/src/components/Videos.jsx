import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, contentCenter = false, direction = "row" }) => {
  if (!videos?.length) return "Loading...";
  // console.log(videos);
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent={contentCenter ? "center" : { xs: "center", md: "start" }}
      alignItems={{ xs: "center", md: "start" }}
      gap={2}
    >
      {videos.map((item, idx) => {
        if (item.id.videoId) {
          return (
            <Box key={idx} sx={{ width: { xs: "100%", sm: "auto" } }}>
              <VideoCard video={item} />
            </Box>
          );
        } else if (item.id.channelId) {
          return (
            <Box key={idx} sx={{ margin: { xs: "auto", sm: 0 } }}>
              <ChannelCard channelDetail={item} />
            </Box>
          );
        }
      })}
    </Stack>
  );
};

export default Videos;
