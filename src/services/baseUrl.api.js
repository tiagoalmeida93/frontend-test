import axios from "axios";

export default function getBaseUrl() {
  const api = axios.create({
    baseURL: `https://www.omdbapi.com`
  });
  return api;
}
