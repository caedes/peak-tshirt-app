import { styles } from "core/api";
import { useQuery } from "react-query";

export default function useStyles() {
  const responseQuery = useQuery("styles", styles.getList());

  return { ...responseQuery, styles: responseQuery.data };
}
