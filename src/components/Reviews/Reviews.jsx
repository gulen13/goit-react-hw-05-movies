import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'service-api/films-api';

const Reviews = () => {
  const [filmReviews, setfilmReviews] = useState([]);
  const [error, seterror] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getFilmReviews(id)
      .then(data => {
        setfilmReviews(data);
      })
      .catch(error => {
        seterror(error.message);
      });
  }, [id]);

  return (
    <div>
      {error && <p>Sorry, there is no information 😭</p>}
      {filmReviews?.length === 0 && (
        <p>Unfortunately, there is no information ....</p>
      )}
      <ul>
        {filmReviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Aurhor: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
