import axios from 'axios';

const options = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'd03c893f0ef0ef1618c3413e2cb11b8a'
  }
};


export const getAllFilms = async () => {
  const { data } = await axios.request('https://api.themoviedb.org/3/trending/all/day', options);

  return data.results;
};

export const getFilmById = async (id) => {
  const { data } = await axios.request(`https://api.themoviedb.org/3/movie/${id}`, options);

  return data;
};
