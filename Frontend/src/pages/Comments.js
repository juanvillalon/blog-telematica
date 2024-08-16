import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext'; // Assuming this contains user authentication info
import LogoutButton from '../components/LogoutButton';

const ReviewsSection = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;



const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SummarySection = styled.div`
  margin-bottom: 20px;
`;

const RatingStars = styled.div`
  font-size: 1.5rem;
  color: #ffb400;
`;

const Comments = () => {
  const { reviews } = useContext(AppContext); // Check for isLoggedIn status
  
  const calculateAverageRating = () => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const getStarRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    
    <ReviewsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
          <div>
      <LogoutButton />
      {/* El contenido de la página */}
    </div>
      <h2>Reseñas</h2>
      <SummarySection>
        <h3>Resumen de Calificaciones</h3>
        <RatingStars>{getStarRating(Math.round(calculateAverageRating()))} {calculateAverageRating()} de 5</RatingStars>
        <p>Basado en {reviews.length} reseñas.</p>
      </SummarySection>
      <ReviewList>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="review"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
          >
            <p><strong>{review.name}</strong> ({review.email})</p>
            <RatingStars>{getStarRating(review.rating)}</RatingStars>
            <p>{review.comment}</p>
          </motion.div>
        ))}
      </ReviewList>
    </ReviewsSection>
  );
};

export default Comments;
