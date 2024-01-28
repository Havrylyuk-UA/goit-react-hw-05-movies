import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('pages/MoviesPage.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
