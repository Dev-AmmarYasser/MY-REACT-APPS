import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

export const MuiCheckBox = () => {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState([]);
  // console.log(accept);
  const handleChange = (event) => {
    setAccept(event.target.checked);
  };
  console.log({ skills });
  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    index === -1
      ? setSkills([...skills, event.target.value])
      : setSkills(skills.filter((skill) => skill !== event.target.value));
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms & conditions"
          control={
            <Checkbox size="small" onChange={handleChange} checked={accept} />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkIcon color="info" />}
          checkedIcon={<BookmarkBorderIcon />}
          onChange={handleChange}
          checked={accept}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  color="error"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                  color="info"
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  color="warning"
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
