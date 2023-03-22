import { CircularProgress } from "@mui/material";
import { useTshirt } from "core/hooks";
import { useParams } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { CtaButton } from "ds/atoms";

import TshirtCard from "../TshirtCard";
import { BottomCallToActions } from "ds/molecules";
import { useCart } from "core/contexts";

export default function TshirtPage() {
  const { tshirtId: id } = useParams();
  const { isLoading, tshirt } = useTshirt({ id });
  const [, { addToCart }] = useCart();

  if (isLoading) return <CircularProgress />;

  const cartItem = {
    id: tshirt.id,
    price: tshirt.price,
    name: tshirt.name,
    imageUrl: tshirt.imageUrl,
    quantity: 1,
  };

  return (
    <>
      <TshirtCard {...tshirt} />
      <BottomCallToActions>
        <CtaButton
          startIcon={<AddShoppingCart />}
          fullWidth
          onClick={addToCart(cartItem)}
        >
          Add to cart
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
