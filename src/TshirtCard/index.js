import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Price } from "ds/atoms";
import { number, oneOf, string } from "prop-types";
import { Link } from "react-router-dom";

export default function TshirtCard({
  id,
  name,
  description,
  imageUrl,
  size,
  price,
}) {
  if (!id) return "";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea LinkComponent={Link} to={`/tshirts/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={`/images/${imageUrl}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Chip label={`Taille : ${size}`} size="small" />
            </Grid>
            <Grid item>
              <Typography component="h6">
                <Price value={price} />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

TshirtCard.propTypes = {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  size: oneOf(["S", "M", "L", "XL"]),
  price: number,
};
