import { responseToJson } from "core/utils";
import config from "react-global-configuration";

const API_BASE_URL = config.get(
  "API_BASE_URL",
  process.env.REACT_APP_API_BASE_URL
);

export const tshirts = {
  getList:
    ({ styleIds }) =>
    () => {
      const tshirtRoute = new URL("/tshirts", API_BASE_URL);

      const { searchParams } = tshirtRoute;
      styleIds.forEach((styleId) => {
        searchParams.append("styleId", styleId);
      });

      return fetch(tshirtRoute).then(responseToJson);
    },
};
