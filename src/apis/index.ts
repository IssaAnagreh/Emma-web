import Axios from "axios";
import { API_BASE_URL } from "../constants";

export const request = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
