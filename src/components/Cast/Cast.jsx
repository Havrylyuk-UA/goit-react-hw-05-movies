import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/api';

import './Cast.css';

const Cast = () => {
  const [actors, setActors] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {actors.cast && (
        <ul className="movie_cast-sheet">
          {actors.cast.map(item => (
            <li key={item.id} className="movie_cast-list">
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
                className="movie_cast-img"
              />
              <p className="movie_cast-desc">Name: {item.name}</p>
              <p className="movie_cast-desc">Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
      {!actors.cast && (
        <p
          style={{
            textAlign: 'center',
            color: 'aliceblue',
            marginLeft: '15px',
            backgroundColor: 'rgb(201, 72, 72)',
          }}
        >
          No cast information available.
        </p>
      )}
    </>
  );
};

export default Cast;
