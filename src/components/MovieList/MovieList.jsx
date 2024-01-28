import { NavLink, useLocation } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <ul className="movie_list-sheet">
        {movieList.map(
          ({ id, poster_path, original_title, title, vote_average }) => (
            <li key={id} className="movie_list-item">
              <NavLink
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
              </NavLink>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default MovieList;
