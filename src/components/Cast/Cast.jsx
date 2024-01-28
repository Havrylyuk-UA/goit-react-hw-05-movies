import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/api';

import './Cast.css';

const Cast = () => {
  const [actors, setActors] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const requestCast = async () => {
      try {
        const data = await fetchCast(movieId);
        setActors(data);
      } catch (error) {
        console.log(error);
      }
    };

    requestCast();
  }, [movieId]);

  return (
    <>
      <ul className="movie_cast-sheet">
        {actors.cast ? (
          actors.cast
            .filter(item => item.profile_path)
            .map(item => (
              <li key={item.id} className="movie_cast-list">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt={item.name}
                  className="movie_cast-img"
                />
                <p className="movie_cast-desc">Name: {item.name}</p>
                <p className="movie_cast-desc">Character: {item.character}</p>
              </li>
            ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
    </>
  );
};

export default Cast;
