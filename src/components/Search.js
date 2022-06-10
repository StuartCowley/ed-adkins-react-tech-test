// import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setSearchResults, page, setSearch, setLoading, search }) => {
  // const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    setSearchResults(await getImages(search, page));
    setLoading(false);
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="image-search"
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button className="search-btn" type="submit">
          <svg viewBox="0 0 24 24">
            <path
              fill="#666666"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;

// Search.propTypes = {
//   setSearchResults: PropTypes.string.isRequired,
// };
