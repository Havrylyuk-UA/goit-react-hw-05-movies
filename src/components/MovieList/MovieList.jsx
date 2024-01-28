import { NavLink, useLocation } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ popular }) => {
  const location = useLocation();

  return (
    <>
      <ul className="movie_list-sheet">
        {popular.map(
          ({ id, poster_path, original_title, title, vote_average }) => (
            <li key={id} className="movie_list-item">
              <NavLink
                to={`/movies/${id}`}
                state={location}
                className="movie_list-link"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
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

export default MovieList;
