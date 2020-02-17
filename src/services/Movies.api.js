import axios from "axios";
import { API_KEY } from "../utils/const";
import getBaseUrl from "./baseUrl.api";

const Movies = {
  ById,
  Search,
  getListMovies
};

async function ById(imdbID) {
  const response = await getBaseUrl()
    .get(`?apikey=${API_KEY}&i=${imdbID}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data;
    });
  return response;
}

async function Search(searchMovie) {
  const response = await getBaseUrl()
    .get(`?apikey=${API_KEY}&s=${searchMovie}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data;
    });
  return response;
}

async function getListMovies() {
  const response = axios
    .all([
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt6751668`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt7286456`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt8579674`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt3281548`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt1950186`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt1302006`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt2584384`),
      getBaseUrl().get(`?apikey=${API_KEY}&i=tt1979376`)
    ])
    .then(response => {
      return response.map(movie => movie.data);
    })
    .catch(error => {
      return error.response.data;
    });
  return response;
}

export default Movies;
