import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import { fetchDetails } from '../../services/api';

import './MovieDetails.css';

const MovieDetails = () => {
  const [film, setFilm] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
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

  return (
    <>
      <div className="movie_details-container">
        {film.title && (
          <>
            <div
              className="movie_details-flow"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`,
                backgroundSize: 'calc(max(100%, 1000px)) 100%',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
              }}
            >
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
                <NavLink to="cast" className="movie_details-link">
                  Cast
                </NavLink>
                <NavLink to="reviews" className="movie_details-link">
                  Reviews
                </NavLink>
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
