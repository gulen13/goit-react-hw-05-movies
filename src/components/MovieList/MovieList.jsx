import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ films, error, location }) => {
  return (
    <>
      {error && <p>Sorry. {error} 😭</p>}
      {location.pathname === '/' ? <h1>Trending Today</h1> : ''}
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.protoTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

export default MovieList;
