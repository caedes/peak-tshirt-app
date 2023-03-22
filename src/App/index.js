import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import { CssBaseline } from "@mui/material";
import { FilterProvider } from "core/contexts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../HomePage";
import theme from "./theme";
import TshirtPage from "../TshirtPage";
import Layout from "../Layout";
import ErrorPage from "../ErrorPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "tshirts/:tshirtId",
        element: <TshirtPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
