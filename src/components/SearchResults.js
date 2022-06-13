import React from "react";
import PropTypes from "prop-types";
import LoadSpinner from "./LoadSpinner";
import ImageThumbnail from "./ImageThumbnail";

import "../styles/search-results.css";

const SearchResults = ({ results, loading, setLoading }) => {
  if (!results.length) return;

  return (
    <>
      <div>{loading && <LoadSpinner />}</div>

      <div className="search-results">
        <div className="search-result-cards" data-testid="search-result-cards">
          {results.map((image, index) => (
            <ImageThumbnail key={index} image={image} setLoading={setLoading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  // results: PropTypes.shape({
  //   url: PropTypes.string,
  //   title: PropTypes.string,
  // }),
  // results: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     url: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //   })
  // ),
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};
