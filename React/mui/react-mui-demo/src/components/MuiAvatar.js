import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>AM</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>KO</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>AM</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>KO</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="Doro"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="Doro"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          AM
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          KO
        </Avatar>
      </Stack>
    </Stack>
  );
};
