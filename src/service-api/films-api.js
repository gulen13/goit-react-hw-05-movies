import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  method: 'GET',
  api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
  language: 'en-US',
  include_adult: false,
  headers: {
    accept: 'application/json',
  },
});


export const getAllFilms = async () => {
  const path = '/trending/movie/day';

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.results;
};

export const getFilmById = async (id) => {
  const path = `/movie/${id}`;

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data;
};

export const getFilmCast = async (id) => {
  const path = `/movie/${id}/credits`;

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.cast;
};

export const getFilmReviews = async (id) => {
  const path = `/movie/${id}/reviews`;

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.results;
};

export const getFilmByName = async (query) => {
  const path = '/search/movie';

  const response = await axios.get(`${path}?${searchParams}&query=${query}`);

  return response.data.results;
};