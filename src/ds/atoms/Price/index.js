import { Typography } from "@mui/material";
import { number, oneOf, string } from "prop-types";

export default function Price({ value, variant = "", currency = "EUR" }) {
  const fullPrice = new Intl.NumberFormat(navigator?.language || "fr", {
    style: "currency",
    currency,
  }).format(value);

  const fullVariant = variant === "" && value < 0 ? "negative" : variant;

  return (
    <Typography variant={fullVariant} component="span">
      {fullPrice}
    </Typography>
  );
}

Price.propTypes = {
  value: number.isRequired,
  currency: string,
  variant: oneOf(["discount", ""]),
};
