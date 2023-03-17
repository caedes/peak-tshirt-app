import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
import React from "react";

import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="h1">
              Peak Shirt
            </Typography>
          </Link>
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

      <Outlet />
    </>
  );
}
