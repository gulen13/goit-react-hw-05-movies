import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
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
};

export default MovieList;
