import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import PageButtons from "./PageButtons";
import getImages from "../requests/getImages";
import "../styles/app.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlePageChange = async () => {
    setSearchResults(await getImages(search, page));
  };

  useEffect(() => {
    setSearchResults(handlePageChange());
    setLoading(false);
  }, [page]);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="A Nasa Logo"
      />
      <Search
        setSearchResults={setSearchResults}
        search={search}
        setSearch={setSearch}
        setLoading={setLoading}
        page={page}
      />
      {!loading && <SearchResults results={searchResults} />}
      <PageButtons page={page} setPage={setPage} />
    </div>
  );
};

export default App;
