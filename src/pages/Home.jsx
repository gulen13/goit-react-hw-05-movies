import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllFilms } from 'service-api/films-api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setfilms] = useState(null);
  const [error, seterror] = useState('');

  const location = useLocation();

  useEffect(() => {
    getAllFilms()
      .then(data => {
        setfilms(data);
      })
      .catch(error => {
        seterror(error.message);
      });
  }, []);

  return (
    films && (
      <div>
        <MovieList films={films} error={error} location={location} />
      </div>
    )
  );
};

export default Home;
