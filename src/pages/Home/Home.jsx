import React, { useEffect, useState } from "react";
import CardsMovie from "../../components/CardsMovie/CardsMovie";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Movies from "../../services/Movies.api";

export default function Home() {
  const [oscarMovies, setOscarMovies] = useState([]);
  const [result, setResult] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const getMoviesIndicates = async () => {
    const lista = await Movies.getOscarMovies();
    setOscarMovies(lista);
  };

  const handleSearch = async searchMovie => {
    const { Search } = await Movies.Search(searchMovie);
    setResult(Search);
  };

  useEffect(() => {
    getMoviesIndicates();
  }, []);

  return (
    <>
      <Menu />
      <section className="search">
        {activeButton && (
          <button type="submit" onClick={() => setActiveButton(false)}>
            {"<"}
          </button>
        )}

        <form className="searchForm">
          <input
            type="text"
            placeholder="Movie title..."
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              handleSearch(searchValue);
              setActiveButton(false);
              setSearch(true);
            }}
          >
            Search
          </button>
        </form>
      </section>

      {!search ? (
        <>
          <CardsMovie data={oscarMovies} />
        </>
      ) : (
        <>
          <CardsMovie data={result} search={true} />
        </>
      )}

      <Footer />
    </>
  );
}
