import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material/styles";
import { grey, common } from "@mui/material/colors";

/**
 * Peak Shirt Theme
 *
 * Features:
 * - AppBar is stiky by default
 */
export default createTheme({
  typography: {
    negative: {
      color: "red",
    },
    discount: {
      color: "green",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backgroundColor: common.white,
          color: grey[900],
        },
      },
    },
  },
});
