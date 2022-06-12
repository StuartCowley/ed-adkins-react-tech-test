import React, { useState } from "react";
import PropTypes from "prop-types";
import LoadSpinner from "./LoadSpinner";

import "../styles/search-results.css";

const SearchResults = ({ results, loading, setLoading }) => {
  if (!results.length) return;
  console.log(results);
  const onComplete = () => {
    setLoading(false);
    console.log("loaded");
  };

  return (
    <>
      <div>{loading && <LoadSpinner />}</div>

      <div className="search-results">
        <div className="search-result-cards" data-testid="search-result-cards">
          {results.map((image, index) => (
            <img
              key={index}
              onLoad={onComplete}
              className="search-result-card"
              src={image}
              alt="searchResult"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};
