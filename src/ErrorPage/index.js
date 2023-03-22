import { Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Typography variant="h4">Oops!</Typography>
      <Typography>
        Désolé une erreur est survenue. Veuillez réessayer plus tard.
      </Typography>
      <Link to="/">Retour à la page d'accueil</Link>
      <Typography variant="body2">
        {error.statusText || error.message}
      </Typography>
    </>
  );
}
