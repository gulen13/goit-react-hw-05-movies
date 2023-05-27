import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllFilms } from 'service-api/films-api';

const Home = () => {
  const [films, setfilms] = useState([]);
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
        <h1>Trending Today</h1>
        {error && <p>Sorry. {error} 😭</p>}
        <ul>
          {films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Home;
