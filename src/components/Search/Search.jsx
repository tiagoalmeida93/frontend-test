import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

export default function Search({ back }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className="search">
      {back && (
        <Link className={styles.backButton} to={"/"}>
          {"<"}
        </Link>
      )}
      <form className="searchForm">
        <input
          type="text"
          placeholder="Movie title..."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            alert(searchValue);
          }}
        >
          Search
        </button>
      </form>
    </section>
  );
}
