import { useState } from "react";

const PageButtons = ({ page, setPage }) => {
  return (
    <div className="buttonContainer">
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <p>{page}</p>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default PageButtons;
