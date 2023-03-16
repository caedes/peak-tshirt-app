import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";

import HomePage from "../HomePage";
import theme from "./theme";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
