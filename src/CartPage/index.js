import { Delete } from "@mui/icons-material";
import {
  Avatar,
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
  return (
    <>
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src="" />
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src="" />
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src="" />
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
      </List>
      <BottomCallToActions secondary={<TotalPrice price={123.45} />}>
        <CtaButton startIcon={<ShoppingCartCheckout />} fullWidth>
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
