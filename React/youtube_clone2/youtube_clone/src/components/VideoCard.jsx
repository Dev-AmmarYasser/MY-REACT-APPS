import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

import { Check, CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constans";

const styles = {
  width: { xs: "100%", sm: "358px" },
  height: 180,
  maxWidth: "100%",
};
const blurStyles = {
  width: { xs: "100%", sm: "358px" },
  height: 180,
  filter: "blur(10px)",
  maxWidth: "100%",
};

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log({ snippet });

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "16px",
        transition: ".3s",
        ":hover": {
          transform: "translateY(-3px)",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={
            snippet.title ===
              "Build and Deploy a Full Stack MERN AI Image Generation App | Midjourney &amp; DALL-E Clone" ||
            snippet.title ===
              "Build and Deploy a Full Stack MERN AI Image Generation App | Midjourney & DALL-E Clone"
              ? blurStyles
              : styles
          }
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            sx={{ fontFamily: "Rubik, sans-serif" }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ fontFamily: "Rubik, sans-serif" }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
