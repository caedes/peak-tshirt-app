import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { useTshirts } from "core/hooks";
import { useStyleFilters } from "core/contexts";

import TshirtCard from "../TshirtCard";
import StyleFilters from "StyleFilters";

export default function HomePage() {
  const [selectedStyles] = useStyleFilters();
  const { isLoading, tshirts } = useTshirts({ styleIds: selectedStyles });

  if (isLoading) return <CircularProgress />;

  return (
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
  );
}
