import { CircularProgress } from "@mui/material";
import { useTshirt } from "core/hooks";
import { useParams } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { CtaButton } from "ds/atoms";

import TshirtCard from "../TshirtCard";
import { BottomCallToActions } from "ds/molecules";

export default function TshirtPage() {
  const { tshirtId: id } = useParams();
  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <TshirtCard {...tshirt} />
      <BottomCallToActions>
        <CtaButton startIcon={<AddShoppingCart />} fullWidth>
          Add to cart
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
