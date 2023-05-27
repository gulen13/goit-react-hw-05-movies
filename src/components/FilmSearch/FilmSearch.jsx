import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilmSearch = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSeachParams] = useSearchParams();

  useEffect(() => {
    const film = searchParams.get('film');
    if (!film) {
      return;
    }

    // fetchByRegion(region)
    //   .then(setCountries)
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, [searchParams]);

  const onSubmit = film => {
    setSeachParams({ film });
  };

  return <SearchForm onSubmit={onSubmit} />;
};

export default FilmSearch;
