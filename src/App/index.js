import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";

import HomePage from "../HomePage";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
