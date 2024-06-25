// src/components/FilmList.js
import React from 'react';
import FilmCard from './FilmCard';
import PropTypes from 'prop-types';

const FilmList = ({ films }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          description={film.description}
          posterURL={film.posterURL}
          rating={film.rating}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterURL: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FilmList;
