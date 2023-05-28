import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'service-api/films-api';

const Reviews = () => {
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
        <ul>
          {filmCast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://dummyimage.com/150x200/aba46f/0011ff.jpg&text=Actor'
                }
                alt={name}
                width="150"
              />
              <p>{name}</p>
              <p>Character : {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
