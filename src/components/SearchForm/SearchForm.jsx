import './SearchForm.css';

const SearchForm = () => {
  return (
    <>
      <form className="search_form">
        <input
          type="text"
          className="search_form-input"
          placeholder="Please, input movie name"
        />
        <button type="submit" className="search_form-btn">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
