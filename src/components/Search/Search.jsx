import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ back }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className="search">
      {back && <Link to={"/"}>{"<"}</Link>}
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
