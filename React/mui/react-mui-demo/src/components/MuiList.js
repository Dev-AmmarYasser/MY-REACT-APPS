import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef", borderRadius: "24px" }}>
      <List sx={{ bgcolor: "#333", color: "#fff", borderRadius: "16px" }}>
        <ListItem
          disablePadding
          sx={{ bgcolor: "#333", color: "#fff", borderRadius: "8px" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 1"
              secondary="Secondary Text"
              sx={{ color: "#fff" }}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          disablePadding
          sx={{ bgcolor: "#333", color: "#fff", borderRadius: "8px" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 2" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          disablePadding
          sx={{ bgcolor: "#333", color: "#fff", borderRadius: "8px" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 3" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
