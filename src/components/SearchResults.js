import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="search-results">
        <p>Search Results</p>
        <div className="search-result-cards">
          {results.map((image) => (
            <img
              className="search-result-card"
              src={image}
              alt="searchResult"
            />
          ))}
        </div>
      </div>
    );
  }
};

export default SearchResults;
