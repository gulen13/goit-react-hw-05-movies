import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAllFilms } from 'service-api/films-api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setfilms] = useState(null);
  const [error, seterror] = useState('');

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
    <>
      <h1>Trending Today</h1>
      {films && <MovieList films={films} />}
      {error && <p>Sorry. {error} 😭</p>}
    </>
  );
};

export default Home;
