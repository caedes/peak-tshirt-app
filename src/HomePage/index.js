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

export default function HomePage() {
  return (
    <>
      <AppBar position="sticky">
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
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
        <Grid item xs={6}>
          <TshirtCard />
        </Grid>
      </Grid>
    </>
  );
}
