import React, { useState } from "react";
import PropTypes from "prop-types";

const ImageThumbnail = ({ image, setLoading }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onComplete = () => {
    setLoading(false);
  };

  return (
    <div
      className="search-result-card"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img
        key={image.url}
        onLoad={onComplete}
        className="search-result-image"
        src={image.url}
        alt="searchResult"
      />
      {isHovered && (
        <div className="search-result-description" key={image.title}>
          {image.title}
        </div>
      )}
    </div>
  );
};

export default ImageThumbnail;

ImageThumbnail.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  setLoading: PropTypes.func.isRequired,
};
