import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import { CssBaseline } from "@mui/material";
import { CartProvider, FilterProvider } from "core/contexts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../HomePage";
import theme from "./theme";
import TshirtPage from "../TshirtPage";
import Layout from "../Layout";
import ErrorPage from "../ErrorPage";
import CartPage from "../CartPage";

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
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CartProvider>
            <CssBaseline />
            <RouterProvider router={router} />
          </CartProvider>
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
