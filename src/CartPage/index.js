import { Delete } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function CartPage() {
  return (
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
        <ListItemText primary="Single-line item" secondary={"Secondary text"} />
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
        <ListItemText primary="Single-line item" secondary={"Secondary text"} />
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
        <ListItemText primary="Single-line item" secondary={"Secondary text"} />
      </ListItem>
    </List>
  );
}
