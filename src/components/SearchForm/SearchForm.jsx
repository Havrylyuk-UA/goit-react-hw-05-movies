import { useState } from 'react';

import './SearchForm.css';

const SearchForm = ({ handleSubmit }) => {
  const [word, setWord] = useState('');

  const handlePushWord = e => {
    e.preventDefault();
    handleSubmit(word.toLowerCase().trim());
    clearForm();
  };

  const clearForm = () => {
    setWord('');
  };

  const handleChangeWord = e => {
    const targetWord = e.target.value;
    setWord(targetWord);
  };

  return (
    <form className="search_form" onSubmit={handlePushWord}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        className="search_form-input"
        placeholder="Please, input movie name"
        onChange={handleChangeWord}
        value={word}
      />
      <button type="submit" className="search_form-btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
