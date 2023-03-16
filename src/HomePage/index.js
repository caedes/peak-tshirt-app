import {
  AppBar,
  Badge,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
import React from "react";
import { useTshirts } from "hooks";

import TshirtCard from "../TshirtCard";

export default function HomePage() {
  const { isLoading, tshirts } = useTshirts();

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

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {tshirts.map(({ id }) => (
            <Grid item xs={6} key={id}>
              <TshirtCard />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
