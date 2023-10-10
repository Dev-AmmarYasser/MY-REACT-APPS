import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioBtn = () => {
  const [years, setYears] = useState("0-2");

  console.log(years);

  const handleChange = (event) => {
    setYears(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years Of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          value={years}
        >
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>Invalid Input</FormHelperText>
      </FormControl>
    </Box>
  );
};
