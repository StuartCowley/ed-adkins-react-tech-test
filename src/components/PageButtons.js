import PropTypes from "prop-types";
import "../styles/page-buttons.css";

const PageButtons = ({ page, setPage }) => {
  return (
    <div className="button-container">
      <button
        className="button-previous"
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
        disabled={page <= 1}
      >
        &laquo; Previous
      </button>
      <p className="page-number">{page}</p>
      <button
        className="button-next"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default PageButtons;

PageButtons.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
