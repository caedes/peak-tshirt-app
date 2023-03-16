import { useQuery } from "react-query";

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", () =>
    fetch("http://localhost:3001/tshirts").then((response) => response.json())
  );

  return { ...queryResponse, tshirts: queryResponse.data };
}
