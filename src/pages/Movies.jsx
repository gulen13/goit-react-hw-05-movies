import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getFilmByName } from 'service-api/films-api';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, seterror] = useState('');
  const [searchParams, setSeachParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const film = searchParams.get('film') ?? '';
    if (!film) {
      return;
    }
    getFilmByName(film)
      .then(data => {
        setFilms(data);
      })
      .catch(error => {
        seterror(error.message);
      });
  }, [searchParams]);

  const onSubmit = film => {
    setSeachParams({ film });
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <MovieList films={films} error={error} location={location} />
    </div>
  );
};

export default Movies;
