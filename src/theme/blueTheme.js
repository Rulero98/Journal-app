import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 59, 117, 0.4)'
    },
    secondary: {
      main: 'rgb(0, 59, 117)'
    },
    error: {
      main: red.A400
    }
  }
})