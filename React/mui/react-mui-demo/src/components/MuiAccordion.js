import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion One</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library[3][4] for building user interfaces
            based on components. It is maintained by Meta (formerly Facebook)
            and a community of individual developers and companies and a
            community of individual developers and companies
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion Two</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library[3][4] for building user interfaces
            based on components. It is maintained by Meta (formerly Facebook)
            and a community of individual developers and companies and a
            community of individual developers and companies
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion Three</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library[3][4] for building user interfaces
            based on components. It is maintained by Meta (formerly Facebook)
            and a community of individual developers and companies and a
            community of individual developers and companies
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
