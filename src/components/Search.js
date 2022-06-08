import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="image-search"
          type="text"
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;
