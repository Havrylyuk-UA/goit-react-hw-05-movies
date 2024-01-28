import { fetchTrend } from 'services/api';

import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const requestTrend = async () => {
      try {
        const trend = await fetchTrend();

        setMovie(trend.results);
      } catch (error) {
        console.log(error);
      }
    };
    requestTrend();
  }, []);

  return (
    <>
      <MovieList movieList={movie} />
    </>
  );
};

export default HomePage;
