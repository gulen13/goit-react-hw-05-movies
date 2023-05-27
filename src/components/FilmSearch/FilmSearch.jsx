import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getFilmByName } from 'service-api/films-api';

const FilmSearch = () => {
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
      {error && <p>Sorry. {error} 😭</p>}
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmSearch;
