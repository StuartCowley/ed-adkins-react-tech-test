import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-results">No results.</p>;
  } else {
    return (
      <div className="search-results">
        <div className="search-result-cards" data-testid="search-result-cards">
          {results.map((image, index) => (
            <img
              key={index}
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

// SearchResults.propTypes = {
//   results: PropTypes.array.isRequired,
// };
