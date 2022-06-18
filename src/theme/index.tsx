import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: green[500],
    },
  },
});
export default theme;

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
}
