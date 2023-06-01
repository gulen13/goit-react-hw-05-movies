import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LINK, Li, Ul } from './MovieList.styled';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <Ul>
        {films.map(({ id, title }) => (
          <Li key={id}>
            <LINK to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </LINK>
          </Li>
        ))}
      </Ul>
    </>
  );
};

MovieList.protoTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
