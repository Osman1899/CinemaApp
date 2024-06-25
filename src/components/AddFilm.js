// src/components/AddFilm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddFilm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleAdd = () => {
    const newFilm = {
      id: Date.now(),
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };
    onAdd(newFilm);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleAdd}>Add Film</button>
    </div>
  );
};

AddFilm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddFilm;
