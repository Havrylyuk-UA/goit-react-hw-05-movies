import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { fetchSearch } from 'services/api';

import '../components/MovieList/MovieList.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useState();
  const [findMovie, setFindMovie] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (!searchParams) return;
    const requestSearch = async () => {
      try {
        const search = await fetchSearch(searchParams);

        if (search.results.length === 0) {
          return alert('Sorry, the movie was not found');
        }

        setFindMovie(search.results);
      } catch (error) {
        console.log(error);
      }
    };
    requestSearch();
  }, [searchParams]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <SearchForm handleSubmit={setSearchParams} />
      <ul className="movie_list-sheet">
        {findMovie &&
          findMovie.map(
            ({ id, poster_path, original_title, title, vote_average }) => (
              <li key={id} className="movie_list-item">
                <NavLink
                  to={`/movies/${id}`}
                  state={location}
                  className="movie_list-link"
                >
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/original${poster_path}`
                        : defaultImg
                    }
                    alt={original_title}
                    className="movie_list-img"
                  />
                  <p className="movie_list-desc">{title}</p>
                  <p className="movie_list-desc">Rating {vote_average}</p>
                </NavLink>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default MoviesPage;
