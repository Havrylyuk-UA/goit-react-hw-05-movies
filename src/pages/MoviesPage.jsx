import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { fetchSearch } from 'services/api';

import '../components/MovieList/MovieList.css';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [findMovie, setFindMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!searchParams) return;
    const requestSearch = async () => {
      try {
        setLoading(true);
        const search = await fetchSearch(searchParams);

        setFindMovie(search.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    requestSearch();
  }, [searchParams]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const foundMovies = findMovie.map(
    ({ id, poster_path, original_title, title, vote_average }) => (
      <li key={id} className="movie_list-item">
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
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
        </Link>
      </li>
    )
  );

  return (
    <>
      <SearchForm handleSubmit={setSearchParams} />
      <ul className="movie_list-sheet">
        {loading && <Loader />}
        {findMovie && foundMovies}
      </ul>
    </>
  );
};

export default MoviesPage;
