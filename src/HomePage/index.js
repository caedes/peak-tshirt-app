import {
  AppBar,
  Badge,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail } from "@mui/icons-material";

import TshirtCard from "../TshirtCard";
import React from "react";

export default function HomePage() {
  const [tshirts, setTshirts] = React.useState([]);

  React.useEffect(() => {
    async function fetchTshirts() {
      const response = await fetch("http://localhost:3001/tshirts");
      const tshirts = await response.json();

      setTshirts(tshirts);
    }

    fetchTshirts();
  }, []);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Peak Shirt
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        {tshirts.map(({ id }) => (
          <Grid item xs={6} key={id}>
            <TshirtCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
