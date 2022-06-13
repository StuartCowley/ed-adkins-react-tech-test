import React, { useState } from "react";
import PropTypes from "prop-types";
import LoadSpinner from "./LoadSpinner";
import ImageThumbnail from "./ImageThumnail";

import "../styles/search-results.css";

const SearchResults = ({ results, loading, setLoading }) => {
  if (!results.length) return;

  return (
    <>
      <div>{loading && <LoadSpinner />}</div>

      <div className="search-results">
        <div className="search-result-cards" data-testid="search-result-cards">
          {results.map((image) => (
            <ImageThumbnail image={image} setLoading={setLoading} />
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
