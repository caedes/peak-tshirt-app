import { Delete } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { number } from "prop-types";
import { Price } from "ds/atoms";

const TotalPrice = ({ price }) => (
  <Typography>
    <strong>Total price:</strong> <Price value={price} />
  </Typography>
);

TotalPrice.propTypes = {
  price: number,
};

export default function CartPage() {
  const cart = [
    { id: 1, price: 12.34, name: "Tshirt 1", imageUrl: "1.jpg", quantity: 1 },
    { id: 2, price: 12.34, name: "Tshirt 2", imageUrl: "1.jpg", quantity: 2 },
    { id: 3, price: 12.34, name: "Tshirt 2", imageUrl: "1.jpg", quantity: 2 },
    { id: 4, price: 12.34, name: "Tshirt 2", imageUrl: "1.jpg", quantity: 2 },
  ];

  return (
    <>
      <List>
        {cart.map(({ id, price, name, imageUrl, quantity }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={`/images/${imageUrl}`} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Grid container>
                  <Grid item>
                    <Typography>{name}</Typography>
                  </Grid>
                  {quantity > 1 && (
                    <Grid item sx={{ marginLeft: 1 }}>
                      <Typography variant="caption">(x{quantity})</Typography>
                    </Grid>
                  )}
                </Grid>
              }
              secondary={<Price value={price} />}
            />
          </ListItem>
        ))}
      </List>
      <BottomCallToActions secondary={<TotalPrice price={123.45} />}>
        <CtaButton startIcon={<ShoppingCartCheckout />} fullWidth>
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
