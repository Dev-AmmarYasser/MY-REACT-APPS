import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./App.css";
import { MuiAlert } from "./components/MuiAlert";
import { MuiDialog } from "./components/MuiDialog";
import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiSnackBar } from "./components/MuiSnackBar";
import { MuiTable } from "./components/MuiTable";

import { MuiTooltip } from "./components/MuiTooltip";
import { MuiPicker } from "./components/MuiPicker";
import { MuiDateRangePicker } from "./components/MuiDateRangePicker";
import { MuiTabs } from "./components/MuiTabs";
import { MuiTimeLine } from "./components/MuiTimeLine";
import { MuiMasonry } from "./components/MuiMasonry";
import { MuiResponsivness } from "./components/MuiResponsivness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#c2185b",
  },
  palette: {
    secondary: {
      main: colors.cyan[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MuiNavbar /> */}
          <MuiResponsivness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
