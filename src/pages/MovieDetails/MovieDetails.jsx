import React, { useState, Suspense } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'service-api/films-api';
import {
  Div,
  Div2,
  LINKCastRew,
  LinkStl,
  P,
  StateList,
} from './MovieDetails.styled';

const defaultImg = 'https://dummyimage.com/350x400/aba46f/0011ff.jpg&text=Film';
const defaultGenresTxt = 'No information about genres';

const MovieDetails = () => {
  const [film, setfilm] = useState(null);
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getFilmById(id).then(data => {
      setfilm(data);
    });
  }, [id]);

  return (
    film && (
      <div>
        <LinkStl to={backLinkHref}>Go Back</LinkStl>
        <Div>
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : defaultImg
            }
            alt={film.title}
            width="300"
          />
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
            <p>
              {film.genres
                ? film.genres.map(film => film.name).join(', ')
                : defaultGenresTxt}
            </p>
          </Div2>
        </Div>
        <hr />
        <p>Additional information</p>
        <StateList>
          <li>
            <LINKCastRew to="cast" state={{ from: backLinkHref }}>
              Cast
            </LINKCastRew>
          </li>
          <li>
            <LINKCastRew to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </LINKCastRew>
          </li>
        </StateList>
        <hr />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
