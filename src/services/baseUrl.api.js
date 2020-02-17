import axios from "axios";

export default function getBaseUrl() {
  const api = axios.create({
    baseURL: `http://www.omdbapi.com`
  });
  return api;
}
