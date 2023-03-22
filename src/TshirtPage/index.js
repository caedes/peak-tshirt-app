import { Button, CircularProgress, Paper } from "@mui/material";
import { useTshirt } from "core/hooks";
import { useParams } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";

import TshirtCard from "../TshirtCard";

export default function TshirtPage() {
  const { tshirtId: id } = useParams();
  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <TshirtCard {...tshirt} />
      <Paper
        elevation={3}
        square
        sx={{ padding: 2, position: "fixed", bottom: 0, width: "100vw" }}
      >
        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon={<AddShoppingCart />}
          fullWidth
        >
          Add to cart
        </Button>
      </Paper>
    </>
  );
}
