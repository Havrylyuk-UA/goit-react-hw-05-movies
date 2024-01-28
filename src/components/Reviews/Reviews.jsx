import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../services/api';

import './Reviews.css';

const Reviews = () => {
  const [review, setReview] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const requestReview = async () => {
      try {
        const data = await fetchReview(movieId);
        setReview(data);
      } catch (error) {
        console.log(error);
      }
    };

    requestReview();
  }, [movieId]);
  return (
    <>
      {review.results && review.results.length > 0 ? (
        <ul className="movie_review-sheet">
          {review.results.map(item => (
            <li key={item.id} className="movie_review-item">
              <h3 className="movie_review-desc">Author: {item.author}</h3>
              {item.author_details.rating && (
                <p>Author rating: {item.author_details.rating}</p>
              )}
              <p className="movie_review-desc">{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            textAlign: 'center',
            color: 'aliceblue',
            marginLeft: '15px',
            backgroundColor: 'rgb(201, 72, 72)',
          }}
        >
          Sorry, but no Reviews...
        </p>
      )}
    </>
  );
};

export default Reviews;
