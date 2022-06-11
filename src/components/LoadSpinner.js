import BeatLoader from "react-spinners/BeatLoader";
import "../styles/load-spinner.css";

const LoadSpinner = () => {
  return (
    <div className="loading-spinner">
      <BeatLoader color="#cf0031" className="moon-loader" size={150} />
    </div>
  );
};

export default LoadSpinner;
