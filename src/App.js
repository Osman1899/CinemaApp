// src/App.js
import React, { useState } from 'react';
import FilmList from './components/FilmList';
import Filter from './components/Filter';
import AddFilm from './components/AddFilm';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialFilmsData = [
  {
    id: 1,
    title: 'Breaking Bad',
    rating: 9.8,
    description: 'A high school chemistry teacher turned methamphetamine manufacturer...',
    posterURL: 'https://static.tvtropes.org/pmwiki/pub/images/screenshot_2023_08_30_at_16_21_31_ems_3jpg_webp_image_1400_2100_pixels_scaled_35.png',
  },
  {
    id: 2,
    title: 'Prison Break',
    rating: 9.7,
    description: 'A structural engineer named Michael Scofield devises an elaborate plan...',
    posterURL: 'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
  },
  {
    id: 3,
    title: 'Gomorra',
    rating: 9.0,
    description: 'En Italie, la famille Savastano dirigée par Don pietro domine la mafia napolitaine...',
    posterURL: 'https://italyformovies.it/app/img/film/locandine/gomorra_la_serie_locandina_1546942595.webp',
  },
];

const App = () => {
  const [films, setFilms] = useState(initialFilmsData);
  const [filteredFilms, setFilteredFilms] = useState(initialFilmsData);

  const handleFilter = ({ title, rating }) => {
    setFilteredFilms(
      films.filter(
        (film) =>
          film.title.toLowerCase().includes(title.toLowerCase()) &&
          (!rating || film.rating >= rating)
      )
    );
  };

  const handleAddFilm = (newFilm) => {
    const updatedFilms = [...films, newFilm];
    setFilms(updatedFilms);
    setFilteredFilms(updatedFilms);
  };

  return (
    <div className="App">
      <h1>Cinema App</h1>
      <AddFilm onAdd={handleAddFilm} />
      <Filter onFilter={handleFilter} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default App;
