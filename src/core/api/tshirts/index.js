import { responseToJson } from "core/utils";
import config from "react-global-configuration";

const API_BASE_URL = config.get(
  "API_BASE_URL",
  process.env.REACT_APP_API_BASE_URL
);

export const tshirts = {
  getList: () => () => fetch(`${API_BASE_URL}/tshirts`).then(responseToJson),
};
