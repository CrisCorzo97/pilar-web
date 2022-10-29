import { createTheme } from "@mui/material/styles";

export let theme = createTheme({
  typography: {
    fontFamily: [`'Poppins', sans-serif;`],
  },
  palette: {
    primary: {
      main: "#8DB881",
      light: "#B5EBA4",
      dark: "#426B36",
      contrastText: "#ffffff",
    },
  },
});
