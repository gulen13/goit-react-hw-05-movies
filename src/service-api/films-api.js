import axios from 'axios';

const options = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDNjODkzZjBlZjBlZjE2MThjMzQxM2UyY2IxMWI4YSIsInN1YiI6IjY0NzBiMWY1NzcwNzAwMDExOTI0OTJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5SGub8t1bm16mRBrSE1ihNlbbcDKVgBrNz1pe901dU'
  }
};


export const getAllFilms = async () => {
  const { data } = await axios.request(`https://api.themoviedb.org/3/trending/all/day`, options);

  return data.results;
};

export const getFilmById = async (id) => {
  const { data } = await axios.request(`https://api.themoviedb.org/3/movie/${id}`, options);

  return data;
};
