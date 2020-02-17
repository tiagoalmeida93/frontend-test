import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderDetail from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Movies from "../../services/Movies.api";
import imdblogo from "./../../utils/images/imdblogo.png";

export default function Movie(props) {
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    async function fetchMovieId() {
      const { id } = props.match.params;
      const response = await Movies.ById(id);
      setMovieDetail(response);
    }

    fetchMovieId();
  }, [props.match.params]);
  return (
    <>
      <Menu />
      <HeaderDetail />

      <section className="movie" id="movie">
        <div className="movieInfo">
          <h1>{movieDetail.Title}</h1>
          <p>{movieDetail.Plot}</p>
          <p>
            <strong>Genre:</strong> <span>{movieDetail.Genre}</span>
          </p>
          <p>
            <strong>Director:</strong> <span>{movieDetail.Director}</span>
          </p>
          <p>
            <strong>Year:</strong> <span>{movieDetail.Year}</span>
          </p>
          <p>
            <strong>Runtime:</strong> <span>{movieDetail.Runtime}</span>
          </p>
          <p>
            <strong>Language:</strong> <span>{movieDetail.Language}</span>
          </p>
          <p>
            <strong>Country:</strong> <span>{movieDetail.Country}</span>
          </p>
          <p>
            <strong>Actors:</strong> <span>{movieDetail.Actors}</span>
          </p>
          <p>
            <strong>Awards:</strong> <span>{movieDetail.Awards}</span>
          </p>
        </div>
        <div className="movieImg">
          <img src={movieDetail.Poster} alt={movieDetail.Title} />
        </div>
      </section>

      <section className="movie" id="movie">
        <div className="movieInfo">
          <h1>Rating</h1>
          <p>
            <label>Rating IMDb:</label>{" "}
            <strong>{movieDetail.imdbRating}</strong>
            {" / "}
            <label>Votes:</label> <strong>{movieDetail.imdbVotes}</strong>
          </p>
          <p>
            <label>Metascore:</label> <strong>{movieDetail.Metascore}</strong>
          </p>
        </div>

        <div className="movieImg">
          <img src={imdblogo} alt="IMDb" />
        </div>
      </section>

      <Footer />
    </>
  );
}
