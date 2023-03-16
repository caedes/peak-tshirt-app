import { tshirts } from "core/api";
import { useQuery } from "react-query";

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", tshirts.getList());

  return { ...queryResponse, tshirts: queryResponse.data };
}
