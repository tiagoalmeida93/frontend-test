import React from "react";
import { Link } from "react-router-dom";
import NoFound from "../NoFound/NoFound";
import noImage from "./../../utils/images/noImage.png";

export default function CardsMovie(props) {
  return (
    <section className="movies" id="movies">
      {props.search ? (
        <>
          <div>
            <a className="backButton" href="/">
              Back
            </a>
            <h2>Search...</h2>
          </div>
        </>
      ) : (
        <h1>And the oscar goes to...</h1>
      )}
      <div className="moviesContainer">
        {props.data ? (
          props.data.map(movie => (
            <Link
              key={movie.imdbID}
              className="moviesItem"
              to={`/movie/${movie.imdbID}`}
            >
              <h3>{movie.Type}</h3>
              {movie.imdbRating ? (
                <p>Rating: {movie.imdbRating}</p>
              ) : (
                <p>Year: {movie.Year}</p>
              )}
              <img
                src={movie.Poster === "N/A" ? noImage : movie.Poster}
                alt={movie.Title}
              />
            </Link>
          ))
        ) : (
          <>
            <NoFound />
          </>
        )}
      </div>
    </section>
  );
}
