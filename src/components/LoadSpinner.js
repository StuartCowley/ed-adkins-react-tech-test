import PuffLoader from "react-spinners/PuffLoader";
import "../styles/load-spinner.css";

const LoadSpinner = () => {
  return (
    <div className="loading-spinner">
      <PuffLoader color="#cf0031" className="moon-loader" size={150} />
    </div>
  );
};

export default LoadSpinner;
