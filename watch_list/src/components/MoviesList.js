import MovieCard from './MovieCard';
// import Movie from '../api';
// import { useState } from 'react';

function MoviesList({
  movies,
  archivedMovies,
  setArchivedMovies,
  isArchive,
  setIsArchive,
}) {
  const onClickHandler = () => {
    const selectedMovie = movies.filter((state) => state.id === id);
  };
  return (
    <div className='row'>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

export default MoviesList;
