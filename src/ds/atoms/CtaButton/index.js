import { Button } from "@mui/material";
import { node } from "prop-types";

/**
 * CtaButton
 *
 * @example
 * import { CtaButton } from "ds/atoms";
 *
 * <CtaButton startIcon={<AddShoppingCart />} fullWidth>Add to cart</CtaButton>
 */
export default function CtaButton({ children, ...rest }) {
  return (
    <Button variant="contained" color="success" size="large" {...rest}>
      {children}
    </Button>
  );
}

CtaButton.propTypes = {
  children: node,
};
