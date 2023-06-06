import axios from "axios";

const baseURL = process.env.BASE_URL ?? "";
const timeout = 180 * 1000;

const api = axios.create({
  baseURL,
  timeout,
});

export default api;
