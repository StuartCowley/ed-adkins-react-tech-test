import MoonLoader from "react-spinners/MoonLoader";
import "../styles/load-spinner.css";

const LoadSpinner = () => {
  return (
    <div className="loading-spinner">
      <MoonLoader color="#cf0031" className="moon-loader" size={150} />
    </div>
  );
};

export default LoadSpinner;
