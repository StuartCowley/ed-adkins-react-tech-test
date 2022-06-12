import React, { useState } from "react";

const ImageThumbnail = ({ image, setLoading }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onComplete = () => {
    setLoading(false);
    console.log("loaded");
  };

  return (
    <div
      className="search-result-card"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img
        key={image}
        onLoad={onComplete}
        className="search-result-image"
        src={image[0]}
        alt="searchResult"
      />
      {isHovered && <div className="search-result-description">{image[1]}</div>}
    </div>
  );
};

export default ImageThumbnail;
