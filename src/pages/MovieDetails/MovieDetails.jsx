import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'service-api/films-api';
import { Div, Div2, LinkStl, P } from './MovieDetails.styled';

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
    poster = film.poster_path
      ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
      : 'https://dummyimage.com/150x200/aba46f/0011ff.jpg&text=Film';
    genres = film.genres
      ? film.genres.map(film => film.name).join(', ')
      : 'No information about genres';
  }

  return (
    film && (
      <div>
        <LinkStl to={backLinkHref}>Go Back</LinkStl>
        <Div>
          <img src={poster} alt={film.title} width="300" />
          <Div2>
            <h1>
              {film.title} (
              {film.release_date
                ? film.release_date.slice(0, 4)
                : film.release_date}
              )
            </h1>
            <p>User Score: {Math.round(film.vote_average * 10)}%</p>
            <P>Overview</P>
            <p>{film.overview}</p>
            <P>Genres</P>
            <p>{genres}</p>
          </Div2>
        </Div>
        <hr />
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
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
