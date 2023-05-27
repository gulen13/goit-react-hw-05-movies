import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'service-api/films-api';

const MovieDetails = () => {
  const [film, setfilm] = useState({});
  const { id } = useParams();

  let poster = '';
  let genres = '';

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getFilmById(id).then(data => {
      setfilm(data);
    });
  }, [id]);

  if (film) {
    poster = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
    genres = film.genres
      ? film.genres.map(film => film.name).join(', ')
      : 'No information about genres';
  }

  return (
    film && (
      <div>
        <Link to={backLinkHref}>Go Back</Link>
        <div>
          <img src={poster} alt={film.title} />
          <h1>
            {film.title}({film.release_date})
          </h1>
          <p>User Score: {film.vote_average * 10} %</p>
          <p>Overview</p>
          <p>{film.overview}</p>
          <p>Genres</p>
          <p>{genres}</p>
        </div>
        <hr />
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={backLinkHref}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={backLinkHref}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
