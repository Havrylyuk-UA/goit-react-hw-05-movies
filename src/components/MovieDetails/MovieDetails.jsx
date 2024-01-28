import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { fetchDetails } from '../../services/api';

import './MovieDetails.css';

const MovieDetails = () => {
  const [film, setFilm] = useState({});

  const { movieId } = useParams();
  const location = useLocation();

  const from = location.state.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;
    const fetchFilm = async () => {
      try {
        const data = await fetchDetails(movieId);
        setFilm(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilm();
  }, [movieId]);

  const goBack = () => {
    navigate(from);
  };

  const defaultImg = film.backdrop_path
    ? `https://image.tmdb.org/t/p/original${film.backdrop_path}`
    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <div
        className="movie_details-container"
        style={{
          backgroundImage: `url(${defaultImg})`,
          backgroundSize: 'calc(max(100%, 1000px)) 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {film.title && (
          <>
            <div className="movie_details-flow">
              <button onClick={goBack} type="button" className="go-back-btn">
                Go back
              </button>
              <h2 className="movie_details-desc">{film.title}</h2>
              <p className="movie_details-desc">Rating {film.vote_average}</p>
              <p className="movie_details-desc">Budget: {film.budget}$</p>
              {film.title && (
                <p className="movie_details-desc">
                  Genres:{' '}
                  {film.genres
                    .map(item => {
                      return item.name;
                    })
                    .join(', ')}
                </p>
              )}
              <p className="movie_details-desc">{film.overview}</p>
              <div className="movie_details-link-cont">
                <Link
                  to="cast"
                  className="movie_details-link"
                  state={{ from: location.state.from }}
                >
                  Cast
                </Link>
                <Link
                  to="reviews"
                  className="movie_details-link"
                  state={{ from: location.state.from }}
                >
                  Reviews
                </Link>
              </div>
              <Outlet />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
