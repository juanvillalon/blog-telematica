// src/pages/Comments.js
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

const CommentsSection = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Comments = () => {
  const { comments, addComment } = useContext(AppContext);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <CommentsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Comentarios</h2>
      <CommentForm onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario aquí"
          aria-label="Área de texto para comentario"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        ></textarea>
        <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Enviar</button>
      </CommentForm>
      <CommentList>
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            className="comment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
          >
            {comment}
          </motion.div>
        ))}
      </CommentList>
    </CommentsSection>
  );
};

export default Comments;
