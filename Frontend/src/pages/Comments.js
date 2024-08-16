// src/pages/Reviews.js
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

const ReviewsSection = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
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

const Reviews = () => {
  const { reviews, addReview } = useContext(AppContext);
  const [newReview, setNewReview] = useState({ name: '', email: '', rating: 0, comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.comment.trim() && newReview.name && newReview.email && newReview.rating) {
      addReview(newReview);
      setNewReview({ name: '', email: '', rating: 0, comment: '' });
    }
  };

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
      <h2>Reseñas</h2>
      <SummarySection>
        <h3>Resumen de Calificaciones</h3>
        <RatingStars>{getStarRating(Math.round(calculateAverageRating()))} {calculateAverageRating()} de 5</RatingStars>
        <p>Basado en {reviews.length} reseñas.</p>
      </SummarySection>
      <ReviewForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          placeholder="Tu nombre"
          aria-label="Nombre"
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          value={newReview.email}
          onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
          placeholder="Tu correo electrónico"
          aria-label="Correo electrónico"
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value={0} disabled>Calificación</option>
          {[1, 2, 3, 4, 5].map(rating => (
            <option key={rating} value={rating}>{getStarRating(rating)}</option>
          ))}
        </select>
        <textarea
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          placeholder="Escribe tu reseña aquí"
          aria-label="Área de texto para reseña"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        ></textarea>
        <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Enviar</button>
      </ReviewForm>
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

export default Reviews;
