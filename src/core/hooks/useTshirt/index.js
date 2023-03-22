import { tshirts } from "core/api";
import { useQuery } from "react-query";

export default function useTshirt({ id }) {
  const queryResponse = useQuery(["tshirts", { id }], tshirts.getOne({ id }));

  return { ...queryResponse, tshirt: queryResponse.data };
}
