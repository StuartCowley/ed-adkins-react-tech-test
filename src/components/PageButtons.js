import { useState } from "react";
import "../styles/page-buttons.css";

const PageButtons = ({ page, setPage }) => {
  return (
    <div className="button-container">
      <button
        className="button-previous"
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
      >
        &laquo; Previous
      </button>
      <p>{page}</p>
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
