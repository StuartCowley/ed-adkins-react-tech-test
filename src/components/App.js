import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";

const App = () => {
  const [searchResults, setSearchResults] = useState();
  console.log(searchResults);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="A Nasa Logo"
      />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
};

export default App;
