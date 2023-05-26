import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'service-api/films-api';

const MovieDetails = () => {
  const [film, setfilm] = useState({});
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getFilmById(id).then(data => {
      setfilm(data);
    });
  }, [id]);

  let poster = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;

  return (
    film && (
      <div>
        <Link to={backLinkHref}>Go Back</Link>
        <img src={poster} alt={film.title} />
        <h1>
          {film.title}({film.release_date})
        </h1>
      </div>
    )
  );
};

export default MovieDetails;
