import { LiCast } from 'components/MovieList/MovieList.styled';
import { StateList } from 'pages/MovieDetails/MovieDetails.styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'service-api/films-api';

const Cast = () => {
  const [filmCast, setfilmCast] = useState(null);
  const [error, seterror] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getFilmCast(id)
      .then(data => {
        setfilmCast(data);
      })
      .catch(error => {
        seterror(error.message);
      });
  }, [id]);

  return (
    <div>
      {error && <p>Sorry, there is no information 😭</p>}
      {filmCast?.length === 0 && (
        <p>Unfortunately, there is no information ....</p>
      )}
      {filmCast && (
        <StateList>
          {filmCast.map(({ id, profile_path, name, character }) => (
            <LiCast key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://dummyimage.com/190x285/aba46f/0011ff.jpg&text=Actor'
                }
                alt={name}
                width="190"
              />
              <p>{name}</p>
              <p>Character : {character}</p>
            </LiCast>
          ))}
        </StateList>
      )}
    </div>
  );
};

export default Cast;
