import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

// const Skill = {
//   id: null,
//   label: null,
// };

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log(skill);
  return (
    <Stack spacing={2} width="300px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newVal) => setValue(newVal)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e, newVal) => setSkill(newVal)}
      />
    </Stack>
  );
};
