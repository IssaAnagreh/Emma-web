import Axios from "axios";
import { API_BASE_URL } from "../constants";
console.log("Axios", Axios.create);

export const request = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    pragma: "no-cache",
    Accept: "application/json",
  },
});
