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
import { useTshirts } from "core/hooks";
import { useStyleFilters } from "core/contexts";

import TshirtCard from "../TshirtCard";
import StyleFilters from "StyleFilters";

export default function HomePage() {
  const [selectedStyles] = useStyleFilters();
  const { isLoading, tshirts } = useTshirts({ styleIds: selectedStyles });

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
        <>
          <StyleFilters />
          <Grid container spacing={2}>
            {tshirts.map((tshirt) => (
              <Grid item xs={6} key={tshirt.id}>
                <TshirtCard {...tshirt} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
