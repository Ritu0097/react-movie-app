import React from 'react';
import './App.css';

const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    <div className="genre-filter">
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => onGenreSelect(null)}
        >
          All
        </button>
        {genres.map((genre, index) => (
          <button
            key={index}
            className="btn btn-outline-secondary me-2"
            onClick={() => onGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};
export default GenreFilter;