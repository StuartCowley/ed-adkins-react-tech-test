import { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import "../styles/load-spinner.css";

const LoadSpinner = () => {
  return (
    <div className="loading-spinner">
      <BounceLoader color="#cf0031" className="moon-loader" size={150} />
    </div>
  );
};

export default LoadSpinner;
